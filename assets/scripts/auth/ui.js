'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  store.token = data.user.Token
  $('.sign-up-header').text('Successful sign up!')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('.sign-up-header').text('Unsuccessful sign up!')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  store.user.email = data.user.email
  store.user._id = data.user._id
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('.change-password').show()
  $('.sign-out').show()
  $('.upload-flyer').show()
  $('#signInModal').modal('hide')
  $('.message-box').text('Successfully Signed In')
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('form').trigger('reset')
  $('.sign-in-header').text('Failed to Sign In')
}

const signOutSuccess = function () {
  store.user = null
  store.email = undefined
  $('form').trigger('reset')
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.sign-up').show()
  $('.sign-in').show()
  $('.message-box').text('Successfully Signed Out')
  $('.upload-flyer').hide()
}

const changePasswordSuccess = function () {
  $('.change-password-header').text('Successfully Changed Password')
  $('form').trigger('reset')
  $('.message-box').text('')
}

const changePasswordFailure = function () {
  $('.change-password-header').text('Failed to Change Password')
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
