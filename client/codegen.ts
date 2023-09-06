import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // our GraphQL server's endpoint
  // ? The GraphQL Code Generator will look at this address and read the types and fields in the server's schema.
  schema: "http://localhost:4000",
  // ? Which files to consider when generating types
  documents: ["src/**/*.tsx"],
  // ? Destination for output
  generates: {
    "./src/__generated__/": {
      // ? Works well with React and Apollo Client
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
}

export default config;