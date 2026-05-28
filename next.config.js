/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Allow HMR and dev resources from other machines on the local network
  allowedDevOrigins: ['192.168.254.2', '192.168.254.3', '192.168.254.7'],
}

module.exports = nextConfig
