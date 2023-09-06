import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
// our data source file (extending RESTDataSource),
import { TrackAPI } from "./datasources/track-api";

const startApolloServer = async () => {
  // Pass in our typeDefs into its options object
  const server = new ApolloServer({ typeDefs, resolvers });

  /* 
    Our resolver functions expect to find dataSources.trackAPI on their contextValue, 
    which is why we've defined a property called dataSources here in our server.
    dataSources name is a convention.
  */

  const { url } =  await startStandaloneServer(server, {
    // context function that returns an object that all our resolvers will share
    context: async () => {
      // access caching capabilities
      const { cache } = server;
      return {
        dataSources: {
          trackAPI:  new TrackAPI({ cache }),
        },
      };
    },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();