const React = require('react')
const store = require('../store')
const { productSelected } = require('../actions')
const { Grid, Image } = require('semantic-ui-react')

const Product = props => {
  const handleClick = () => {
    console.log('clicked', props.id)
    store.dispatch(productSelected(props.id))
  }
  return (
    <Grid.Column id={props.id} mobile={16} tablet={8} computer={4}>
      <div onClick={handleClick}>
        <Image src={props.imageLink} fluid />
      </div>
      <div>
        {props.productName}
      </div>
      <div>
        {props.price}
      </div>
      <div>
        {props.description}
      </div>
    </Grid.Column>
  )
}

const ProductsList = props => {
  const { products } = props
  return (
    <Grid>
      { products.map((product, i) => {
        return <Product key={i} id={product.id} productName={product.productName} price={product.price} description={product.description} imageLink={product.imageLink} />
      })
      }
    </Grid>
  )
}

module.exports = ProductsList
