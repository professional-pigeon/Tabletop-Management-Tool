/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/api/:path*',
      },
      // {
      //   source: '/campaign/:path*',
      //   destination: 'http://localhost:4000'
      // },
      // {
      //   source: '/auth/login',
      //   destination: 'http://localhost:3000/auth/login'
      // }
    ]
  }
}

module.exports = nextConfig
