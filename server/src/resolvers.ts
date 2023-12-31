import { Resolvers } from './types'

// Our resolvers object's keys will correspond to our schema's types and fields.
export const resolvers: Resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    // ? Destructure dataSources from contextValue
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // ? Get a single track by ID for the track page
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
    // ? Get a single module by ID for the module detail page
    module: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getModule(id);
    }
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track
        }
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null  // object was not successfully modified
        }
      }
    }
  },
  // ? Another resolver specifically for a track's author. A RESOLVER CHAIN.
  // The Track key indicates it's for the Track type in our schema
  // Inside that Track key will be another object with an author field, where we'll define our resolver.
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      // getAuthor needs an authorId which we can access from the parent arg returned by tracksForHome
      // tracksForHome returns a list and calls the author resolver once for each track
      // It passes the current track as the value of parent, enabling us to extract the authorId.
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      // getTrackModules accesses the id from the parent argument, track - getTrack(id)
      return dataSources.trackAPI.getTrackModules(id);
    }
  },
};