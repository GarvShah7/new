import SanityClientConstructor from '@sanity/client'
import PicoSanity from 'picosanity'

import { config } from './config'

// Set up the client for fetching data in the getProps page functions
export const sanityClient = new PicoSanity(config)

// Set up a preview client with serverless authentication for drafts
export const previewClient = new PicoSanity({
    ...config,
    useCdn: true,
    token: typeof document === 'undefined' && process ? process.env.SANITY_API_TOKEN : ``,
})

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview = false) => (usePreview ? previewClient : sanityClient)
// Quick client for querying community posts
export const communityClient = new PicoSanity({ ...config, projectId: `81pocpw8` })

// export const sanityMutationClient = SanityClientConstructor({
//     ...config,
//     token: typeof document === 'undefined' && process ? process.env.SANITY_API_TOKEN : ``,
// })
