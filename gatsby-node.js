//import 'gatsby-source-filesystem'

//export { onCreateNode } from './src/gatsby/onCreateNode'
//export { createPages } from './src/gatsby/createPages'

//require('ts-node').register({files: true});

exports.onCreateNode = require('./src/gatsby/onCreateNode').onCreateNode
exports.createPages = require('./src/gatsby/createPages').createPages
