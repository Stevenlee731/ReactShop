const PRODUCTS_LOADED = 'PRODUCTS_LOADED'
const productsLoaded = products => ({
  type: PRODUCTS_LOADED,
  products
})

const Actions = {
  PRODUCTS_LOADED,
  productsLoaded
}

module.exports = Actions
