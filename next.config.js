/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:3000/:path*' // Proxy to Backend
      }
      // {
      //   source: '/login',
      //   destination: 'http://localhost:3000/login'
      // },
      // {
      //   source: '/auth/login',
      //   destination: 'http://localhost:3000/auth/login'
      // }
    ]
  }
}

module.exports = nextConfig
