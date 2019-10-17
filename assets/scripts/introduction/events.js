'use strict'
import $ from 'jquery'
const flyerEvents = require('./../flyer/events')
// const store = require('./../store')

const onClickFirst = function () {
  $('.message-container').hide()
  $('.upper-bar').show()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.upload-flyer').hide()
  flyerEvents.onGetFlyers(event)
  $('.message-box').text('Welcome to Flyer. Enjoy browsing through local happenings.')
}

const addIntroHandlers = function () {
  $('.next').on('click', onClickFirst)
}

module.exports = {
  addIntroHandlers
}
