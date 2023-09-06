import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";

/*
  With mocks enabled, Apollo Server always returns exactly two entries for every list field.
  To get more entries at a time, let's say 6, we'll add a Query.tracksForHome to our mocks 
  object and return an Array of that given length like so: [...new Array(6)].
*/
const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

const startApolloServer = async () => {
  // Pass in our typeDefs into its options object
  const server = new ApolloServer({
    /*
      With this code, we're generating an executable schema from our typeDefs,
      and instructing Apollo Server to populate every queried schema field 
      with a placeholder value (such as Hello World for String fields).
    */
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks
    })
  });
  const { url } =  await startStandaloneServer(server);
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();