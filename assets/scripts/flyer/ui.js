'use strict'
// const store = require('../store')
const showFlyersTemplate = require('../templates/flyers.handlebars')

const onCreateSuccess = (formData) => {
  $('.message-box').text('Success Flyer Created.')
  $('form').trigger('reset')
}

const onCreateFailure = (formData) => {
  $('.message-box').text('Failure: Profile not Created')
}

const onIndexSuccess = (data) => {
  const showFlyersHtml = showFlyersTemplate({flyers: data.flyers})
  $('#uploadFlyerModal').modal('hide')
  $('.all-flyers').html(showFlyersHtml)
  $('.all-flyers').show()
}

const onIndexFailure = function () {
  $('.message-box').text('Unable to get flyers.')
}

const onDestroySuccess = function () {
  $('.message-box').text('Successfully deleted flyer.')
}

const onDestroyFailure = function () {
  $('.message-box').text('Could not delete flyer.')
}

const onUpdateSuccess = function () {
  $('.message-box').text('Successfully updated flyer.')
}

const onUpdateFailure = function () {
  $('.message-box').text('Could not update flyer.')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}
