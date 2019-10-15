'use strict'
import $ from 'jquery'
const onClickFirst = function () {
  $('.message-container').hide()
  $('.upper-bar').show()
  console.log('hello')
}

const addIntroHandlers = function () {
  $('.next').on('click', onClickFirst)
}

module.exports = {
  addIntroHandlers,
  onClickFirst
}
