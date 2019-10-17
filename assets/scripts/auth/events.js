const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const flyerEvents = require('./../flyer/events')
const store = require('./../store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // run handlebars files to display all of the profiles that have been created
  // sign in is successful
  event.preventDefault()
  const data = getFormFields(event.target)
  store.email = data.credentials.email
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(flyerEvents.onGetFlyers)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .then(flyerEvents.onGetFlyers)
    .catch(ui.signOutFailure)
}

const addAuthHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addAuthHandlers
}
