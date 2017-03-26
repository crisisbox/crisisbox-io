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
  // console.log(i,"|»", modSlug)
  // there maybe better ways to do this, but hey, its working.
  pageContent[modSlug] = md
})

export default {
  metadata,
  pageContent
}
