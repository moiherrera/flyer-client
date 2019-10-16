'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const introEvents = require('./introduction/events')
const authEvents = require('./auth/events')
const flyerEvents = require('./flyer/events')

$(() => {
  $('.upper-bar').hide()
  flyerEvents.addFlyerHandlers()
  introEvents.addIntroHandlers()
  authEvents.addAuthHandlers()
})
