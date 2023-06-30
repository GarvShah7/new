import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://6redmxra.api.sanity.io/v1/graphql/production/default",
  documents: "app/graphql/**/*.graphql",
  generates: {
    "app/api/generated/graphql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
        {
          add: {
            content: '// @ts-nocheck'
          }
        },
     
      ],
      config: {
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
