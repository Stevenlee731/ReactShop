const { PRODUCT_SELECTED } = require('../actions')

const detailView = (state = {}, action) => {
  switch (action.type) {
    case PRODUCTS_SELECTED:
      return action.product
    default:
      return state
  }
}

module.exports = detailView
