
import { GraphQLClient } from "graphql-request";
import { DATA_SET, NEXT_PUBLIC_PROJECT_ID } from "../../utils/constants";
export const gql_url = `https://${
  NEXT_PUBLIC_PROJECT_ID || "%SANITY_PROJECT_ID%"
}.apicdn.sanity.io/v1/graphql/${DATA_SET || "production"}/default`;
const client = new GraphQLClient(gql_url);
client.setHeader(
  "Authorization",
  "Bearer " + String(process.env.SANITY_API_TOKEN ?? "")
);

export default client;