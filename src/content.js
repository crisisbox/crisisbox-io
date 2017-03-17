import slugify from 'underscore.string/slugify'
var allContent = require.context('./content', false, /\.md$/)

const metadata = {
  name: "Crisisbox",
  blurb: "a rapid response toolkit",
}

var pageContent = [];
allContent.keys().map(function(key, i) {
  var modName = key.split('.md')[0].split('./')[1]
  var modPath = './content/'+ key.split('./')[1]
  var modSlug = slugify(modName)
  // console.log(i,"|»", modSlug)
  // there maybe better ways to do this, but hey, its working.
  var md = require(modPath)
  pageContent[modSlug] = md
})

export default {
  metadata,
  pageContent
}

console.log("tabLabel»»",pageContent['doingnow'].tabLabel)
console.log("pageContent»»",pageContent['doingnow'].__content)
