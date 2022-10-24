const path = require('path')
const allowedImageWordPressDomain = new URL(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL).hostname;


module.exports = {
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: [allowedImageWordPressDomain, 'staging-petsmarketplace-staging.kinsta.cloud', "m.media-amazon.com", "via.placeholder.com", "cdn.pixabay.com"],
  },
}