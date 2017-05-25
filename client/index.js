const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const ProductsList = require('./components/ProductsList')
const { productsLoaded } = require('./actions')
window.store = store

const App = props => {
  return (
    <div className='app'>
      <ProductsList {...props} />
    </div>
  )
}

const render = () => {
  const state = store.getState()
  console.log('state', state)
  const $app = document.querySelector('#app')
  ReactDOM.render(<App {...state} />, $app)
}

store.subscribe(render)
render()

fetch('/products')
  .then(res => res.json())
  .then(products => {
    store.dispatch(productsLoaded(products))
  })
