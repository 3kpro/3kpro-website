/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/lp',
        destination: '/',
        permanent: false,
      },
      {
        source: '/lp/:path*',
        destination: '/',
        permanent: false,
      },
      {
        source: '/clients/GreenAuto/preview-01-gat-os',
        destination: '/clients/GreenAuto/preview-01-gat-os/index.html',
        permanent: false,
      },
      {
        source: '/clients/GreenAuto/preview-02-apex-atelier',
        destination: '/clients/GreenAuto/preview-02-apex-atelier/index.html',
        permanent: false,
      },
      {
        source: '/clients/GreenAuto/preview-03-precision-lab',
        destination: '/clients/GreenAuto/preview-03-precision-lab/index.html',
        permanent: false,
      },
      {
        source: '/clients/GreenAuto/preview-04-wave-flagship',
        destination: '/clients/GreenAuto/preview-04-wave-flagship/index.html',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/clients/GreenAuto',
        destination: '/clients/GreenAuto/index.html',
      },
      {
        source: '/clients/greenauto',
        destination: '/clients/GreenAuto/index.html',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/clients/GreenAuto/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/clients/GreenAuto',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ]
  },
  turbopack: {
    root: __dirname,
  },
  serverExternalPackages: [
    '@sentry/nextjs',
    '@sentry/node',
    '@sentry/node-core',
    '@opentelemetry/instrumentation',
    'import-in-the-middle',
    'require-in-the-middle',
  ],
  // Allow HMR and dev resources from other machines on the local network
  allowedDevOrigins: ['192.168.254.2', '192.168.254.3', '192.168.254.7'],
}

module.exports = nextConfig
