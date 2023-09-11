// ? A tagged template literal, used for wrapping GraphQL strings like the schema definition
import gql from "graphql-tag";

export const typeDefs = gql`
  # Schema definitions go here
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    "Get a specific Track by ID"
    track(id: ID!): Track!
    "Get a specific Module by ID"
    module(id: ID!): Module!
  }

  # We could return a single Track because that's what this mutation updates
  # Returning a new object with additional fields is a better approach
  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  # Track can be null here as the Mutation may fail
  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
    "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
    content: String!
    "The URL to each Module's video, for video based modules"
    videoUrl: String
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;