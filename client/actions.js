const PRODUCT_SELECTED = 'PRODUCT_SELECTED'
const productSelected = product => ({
  type: PRODUCT_SELECTED,
  product
})

const PRODUCTS_LOADED = 'PRODUCTS_LOADED'
const productsLoaded = products => ({
  type: PRODUCTS_LOADED,
  products
})

const Actions = {
  PRODUCTS_LOADED,
  productsLoaded,
  PRODUCT_SELECTED,
  productSelected
}

module.exports = Actions
