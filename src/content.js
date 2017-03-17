// import DoingNow from './content/DoingNow.md'
// import Features from './content/Features.md'
// import Intro from './content/Intro.md'
// import MeasuresOfSuccess from './content/MeasuresOfSuccess.md'
// import Team from './content/Team.md'
// import Motivation from './content/Motivation.md'

import marked from 'marked'
var allContent = require.context('./content', false, /\.md$/)

const metadata = {
  name: "Crisisbox",
  blurb: "a rapid response toolkit",
}

var pageContent = [];
allContent.keys().map(function(key, i) {
  var modName = './content/'+ key.split('./')[1]
  console.log("1", modName)
  // @todo - madeofopeople, get rid of .md from key
  pageContent[key.split('./')[1]] = require(modName)
  // console.log( pageContent[key])
})

export default {
  metadata,
  pageContent
}

console.log(pageContent)
