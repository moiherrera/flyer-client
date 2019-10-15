'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  store.token = data.user.Token
  $('#sign-up').text('Successful sign up!')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Unsuccessful sign up!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('.change-password').show()
  $('.sign-out').show()
  $('#signInModal').modal('hide')
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  store.user = null
  $('form').trigger('reset')
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.sign-up').show()
  $('.sign-in').show()
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  signOutSuccess,
  changePasswordFailure
}
