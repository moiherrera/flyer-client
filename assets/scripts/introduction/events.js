'use strict'
import $ from 'jquery'
const onClickFirst = function () {
  $('.message-container').hide()
  $('.upper-bar').show()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.upload-flyer').hide()
}

const addIntroHandlers = function () {
  $('.next').on('click', onClickFirst)
}

module.exports = {
  addIntroHandlers,
  onClickFirst
}
