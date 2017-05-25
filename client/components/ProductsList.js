const React = require('react')
const { Card, Icon } = require('semantic-ui-react')

const extra = (
  <a>
    <Icon name='shopping basket' />
    Add to Cart
  </a>
)

const Product = props => {
  return (
    <Card
    image={props.imageLink}
    color='teal'
    meta={props.price}
    header={props.productName}
    description={props.description}
    extra={extra}
    />
  )
}

const ProductsList = props => {
  const { products } = props
  return (
    <Card.Group itemsPerRow={4}>
      { products.map((product, i) => {
        return <Product key={i} id={product.id} productName={product.productName} price={product.price} description={product.description} imageLink={product.imageLink} />
      })
    }
    </Card.Group>
  )
}

module.exports = ProductsList
