'use strict'

const store = require('../../store')

const authCheckUpdate = function (owner) {
  // if you own the message, put in the update button
  if (store.email === undefined) {
    return false
  } else if (owner.email === store.email) {
    return true
    // otherwise no buttons for you
  } else {
    return false
  }
}

module.exports = authCheckUpdate
