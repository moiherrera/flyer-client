'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateFlyer = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .then(() => onGetFlyers(event))
    .catch(ui.onCreateFailure)
}

const onGetFlyers = function (event) {
  event.preventDefault()
  api.index(event)
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onUpdateFlyer = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.update(formData)
    .then(function (formData) {
      onGetFlyers(event)
      ui.onUpdateSuccess()
    })
    .catch(ui.onUpdateFailure())
}

const onDestroyFlyer = event => {
  console.log(event)
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  console.log(event.target)
  const lid = $(event.target).data('id')
  console.log(lid)
  console.log('hello')
  api.destroy(id)
    .then(() => {
      ui.onDestroySuccess()
      onGetFlyers(event)
    })
    .catch(ui.onDestroyFailure)
}

const addFlyerHandlers = function () {
  $('#upload-flyer').on('submit', onCreateFlyer)
  $('.all-flyers').on('submit', '.update-flyer-form', onUpdateFlyer)
  $('.all-flyers').on('click', '.delete-flyer', onDestroyFlyer)
}

module.exports = {
  addFlyerHandlers,
  onCreateFlyer,
  onGetFlyers,
  onUpdateFlyer,
  onDestroyFlyer
}
