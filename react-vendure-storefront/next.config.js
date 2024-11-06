/** @type {import('next').NextConfig} */
const withSvgr = require('next-svgr');

module.exports = withSvgr({
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Ваші домени для зображень
  },
});
