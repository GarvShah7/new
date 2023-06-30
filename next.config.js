/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SANITY_API_TOKEN:
      "skrNoHMCX29EzNxM1c4RlYj99t578aVrJNoeVtJEdPxnXf0z2e2dbjDbIShIzkmGAxElrCQ4FWrcNYFsRGgcaWrUkkP6OJpnLFCbNUmFK0nJFW04nVD8jL2l49zdUFi7It9hUtgF82ZTVVtvp4GXRRZMYlPXYYA3n30pXfvcvsf19fw4E06a",
    SANITY_PREVIEW_SECRET: "asdf-1234",
    NEXT_PUBLIC_PROJECT_ID: "6redmxra",
    DATA_SET: "production",
    GRAPHQL_URL: "https://6redmxra.api.sanity.io/v1/graphql/production/default",
    MAILCHIMP_URL:
      "https://codagehabitation.us21.list-manage.com/subscribe/post?u=1f8b689de215874bc3f81039f&amp;id=2f3d0a5296&amp;f_id=002fc2e1f0",
    SANITY_WRITE_TOKEN:
      "skx7GSze5cLzZl6pPJigsXwkBjA9pFfXuaGTbg66z7p0UdRdBKfEsCwFGQBvpwt1Wug2f32xLo1A2Xkq6HhGkReMK3HF9Rnw3Uw0zsRinaUbwav535fDAqWHohSUFtzrSUv26W2qwdb2XjnL62O2fBucB7S8czEiuYNfz4HmtilqI76BYXwL",
    SENDGRID_API_KEY:
      "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",
  },
  images: {
    deviceSizes: [320, 420, 720, 1024, 1080, 1440, 1920],
    imageSizes: [320, 420, 720, 1024, 1080, 1080, 1080],
    domains: [
      'cdn.sanity.io',
      'a.lmcdn.ru',
      'storage.googleapis.com',
    ],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
};
module.exports = nextConfig;
