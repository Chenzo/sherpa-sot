const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'chenzorama.com', 'cdn.discordapp.com'],
  },
  assetPrefix: isProd ? '/sherpa-sot/' : ''
}
