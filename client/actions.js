const PRODUCTS_LOADED = 'PRODUCTS_LOADED'
const productsLoaded = payload => ({
  type: PRODUCTS_LOADED,
  payload
})

const Actions = {
  PRODUCTS_LOADED,
  productsLoaded
}

module.exports = Actions
