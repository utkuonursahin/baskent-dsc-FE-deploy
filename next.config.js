/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  productionBrowserSourceMaps: false,
  async headers(){
    return [{source:'/:path*',headers:[
      {key:'X-Frame-Options',value:'DENY'},
        {key:'X-XSS-Protection',value:'1; mode=block'}
      ]}]
  }
}
module.exports = nextConfig
