
const contentful = require('contentful')
const config = {
  space: process.env.SPACE,
  accessToken: process.env.TOKEN
}
// export 'createClient' to use it in page components
module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}