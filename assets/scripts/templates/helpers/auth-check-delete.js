'use strict'

const store = require('../../store')

const authCheckDelete = function (owner) {
  // if email is undefined return false and return flyers without buttons
  if (store.email === undefined) {
    return false
  } else if (owner.email === store.email) {
    // if the email fo the owner matches the email stored in store, then return true and display button.
    return true
    // otherwise no buttons for you
  } else {
    return false
  }
}

module.exports = authCheckDelete
