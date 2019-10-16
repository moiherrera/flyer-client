'use strict'
const config = require('./../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/flyers',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const destroy = id => {
  return $.ajax({
    url: config.apiUrl + '/flyers/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const create = formData => {
  return $.ajax({
    url: config.apiUrl + '/flyers/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const update = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/flyers/' + formData.flyer.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  index,
  destroy,
  create,
  update
}
