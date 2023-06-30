// import { siteUrlSerializer } from "./app/api/utils/helper"


export function getEnv() {
   
    return {
        MAILCHIMP_ENDPOINT: process.env.MAILCHIMP_ENDPOINT,
        GOOGLE_TRACKING_ID: process.env.GOOGLE_TRACKING_ID,
        // SELF_URL: siteUrlSerializer(process.env.SELF_URL || ''),
        GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
        DATA_SET: process.env.DATA_SET,
        PROJECT_ID: process.env.PROJECT_ID,
        SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    }
}
type ENV = ReturnType<typeof getEnv>

declare global {
    //eslint-disable-next-line no-var
    var ENV: ENV
    interface Window {
        ENV: ENV
    }
}
