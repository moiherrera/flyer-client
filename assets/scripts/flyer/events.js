'use strict'
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onCreateFlyer = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.create(formData)
    .then(ui.onCreateSuccess)
    .then(() => onGetFlyers(event))
    .catch(ui.onCreateFailure)
}

const onGetFlyers = function () {
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onStoreFlyerID = function (event) {
  event.preventDefault()
  store.flyerid = event.target.getAttribute('data-id')
}

const onUpdateFlyer = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.update(formData)
    .then(function (formData) {
      onGetFlyers(event)
      ui.onUpdateSuccess()
    })
    .catch(ui.onUpdateFailure())
}

const onDestroyFlyer = event => {
  event.preventDefault()
  const id = event.target.getAttribute('data-id')
  api.destroy(id)
    .then(() => {
      ui.onDestroySuccess()
      onGetFlyers(event)
    })
    .catch(ui.onDestroyFailure)
}

const addFlyerHandlers = function () {
  $('#upload-flyer').on('submit', onCreateFlyer)
  $('#update-flyer').on('submit', onUpdateFlyer)
  $('.all-flyers').on('click', '.delete-flyer', onDestroyFlyer)
  $('.all-flyers').on('click', '.edit-flyer', onStoreFlyerID)
}

module.exports = {
  addFlyerHandlers,
  onCreateFlyer,
  onGetFlyers,
  onUpdateFlyer,
  onDestroyFlyer,
  onStoreFlyerID
}
