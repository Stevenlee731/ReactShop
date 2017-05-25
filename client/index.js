const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
const ProductsList = require('./components/ProductsList')
const { productsLoaded } = require('./actions')
const { Container } = require('semantic-ui-react')

window.store = store

const style = {
  marginTop: '3%',
  marginLeft: '5%',
  marginRight: '5%'
}

const App = props => {
  return (
    <div className='app'>
      <Container style={style}>
        <ProductsList {...props} />
      </Container>
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
  }
)
