import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        // this path is relative to the types.ts
        // as this is the same folder, we have ./context
        // then we tack on DataSourceContext
        contextType: './context#DataSourceContext',
        mappers: {
          Track: "./models#TrackModel",
          Module: "./models#ModuleModel",
          Author: "./models#AuthorModel"
        },
      },
    },
  },
};

export default config;