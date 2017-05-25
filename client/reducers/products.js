const { PRODUCTS_LOADED } = require('../actions')

const products = (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return state.concat(action.products)
    default:
      return state
  }
}

module.exports = products
