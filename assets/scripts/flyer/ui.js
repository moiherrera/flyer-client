'use strict'
const showFlyersTemplate = require('../templates/flyers.handlebars')

const onCreateSuccess = (formData) => {
  console.log('hello')
  $('.message-box').text('Success Flyer Created.')
  console.log('hello')
  $('form').trigger('reset')
}

const onCreateFailure = (formData) => {
  $('.message-box').text('Failure: Profile not Created')
}

const onIndexSuccess = (data) => {
  const showFlyersHtml = showFlyersTemplate({flyers: data.flyers})
  console.log(data)
  console.log(data.flyers)
  console.log(showFlyersHtml)
  $('#uploadFlyerModal').modal('hide')
  $('.all-flyers').html(showFlyersHtml)
  $('.all-flyers').show()
  $('.message-box').text('Look through events in your area.')
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
