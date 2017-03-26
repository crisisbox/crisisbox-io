import slugify from 'underscore.string/slugify'
var allContent = require.context('./content', false, /\.md$/)

const metadata = {
  name: 'Crisisbox',
  blurb: 'a rapid response toolkit'
}

var pageContent = {};
console.log(allContent)
allContent.keys().map(function(key) {
  var md = allContent(key)
  var modSlug = slugify(key.split('.md')[0].split('./')[1])
  pageContent[modSlug] = md
  console.log(pageContent[modSlug])
})

export default {
  metadata,
  pageContent
}
