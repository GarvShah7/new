  /** @type {import('next-sitemap').IConfig} */


  // sitemap.js


const getPriority = (path) => {
    const priorites_by_level = [1.00, 0.80, 0.50]
    // Set the priority based on the page path
    if (path === '/') {
      return 1.0;
    }
    const route_level = path?.split('/')?.filter(i => i.length > 0)?.length ?? 2
    const priority = priorites_by_level[route_level] ?? 0.50
    return priority
  };
  
  module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://codagehabitation-next.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/server-sitemap.xml'],
    
    
    transform: async (config, path) => {
  
      // Use default transformation for all other cases
      return {
        loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
        changefreq: config.changefreq,
        priority: getPriority(path),
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    } 
  
  };
  