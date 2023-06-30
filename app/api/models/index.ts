// @ts-nocheck
import { GraphQLClient } from "graphql-request";
import {
  GetAllBlogInnerPagePathQueryVariables,
  GetAllPagePathQueryVariables,
  GetAllPageQueryVariables,
  GetBlogInnerPageQueryVariables,
  GetBlogPageQueryVariables,
  GetHomePageQueryVariables,
  getSdk,
} from "../generated/graphql/graphql";
import { DATA_SET, NEXT_PUBLIC_PROJECT_ID, SANITY_WRITE_TOKEN } from "../utils/constants";
import { MaybeFunction } from "graphql-request/build/esm/types";

export const gql_url = `https://${
  NEXT_PUBLIC_PROJECT_ID || "%SANITY_PROJECT_ID%"
}.apicdn.sanity.io/v1/graphql/${DATA_SET || "production"}/default`;

export class PageService {
  private client: GraphQLClient;
  constructor() {
    const headers: MaybeFunction<HeadersInit> = {
      authorization: `Bearer ${SANITY_WRITE_TOKEN}`,
    };
    this.client = new GraphQLClient(gql_url, { headers });
  }
  public sdk() {
    return getSdk(this.client);
  }
  public getPage(variables?: GetHomePageQueryVariables) {
    return getSdk(this.client).getHomePage(variables);
  }
  public getAllPage(variables?: GetAllPageQueryVariables) {
    return getSdk(this.client).getAllPage(variables);
  }
  public getAllPagePath(variables?: GetAllPagePathQueryVariables) {
    return getSdk(this.client).getAllPagePath(variables);
  }
}
export class BlogService {
  private client: GraphQLClient;
  constructor() {
    const headers: MaybeFunction<HeadersInit> = {
      authorization: `Bearer ${SANITY_WRITE_TOKEN}`,
    };
    this.client = new GraphQLClient(gql_url, { headers });
  }
  public sdk() {
    return getSdk(this.client);
  }
  public getBlogPage(variables?: GetBlogPageQueryVariables) {
    return getSdk(this.client).getBlogPage(variables);
  }
  public getBlogInnerPage(variables?: GetBlogInnerPageQueryVariables) {
    return getSdk(this.client).getBlogInnerPage(variables);
  }
  public getAllBlogInnerPagePath(variables?: GetAllBlogInnerPagePathQueryVariables) {
    return getSdk(this.client).getAllBlogInnerPagePath(variables);
  }
}

