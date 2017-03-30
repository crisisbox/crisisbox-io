import slugify from 'underscore.string/slugify'
var allContent = require.context('./content', false, /\.md$/)

const metadata = {
  name: 'Crisisbox',
  blurb: 'a rapid response toolkit',
  repository: 'https://github.com/crisis-box/'
}

var pageContent = {};
allContent.keys().map(function(key) {
  var md = allContent(key)
  var modSlug = slugify(key.split('.md')[0].split('./')[1])
  pageContent[modSlug] = md
})

export default {
  metadata,
  pageContent
}
