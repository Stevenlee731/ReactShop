const { createStore, combineReducers } = require('redux')
const products = require('./reducers/products')
const detailView = require('./reducers/detailView')

const reducer = combineReducers({
  products,
  detailView
})

const store = createStore(
  reducer
)

module.exports = store
