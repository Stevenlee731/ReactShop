const React = require('react')
// const store = require('../store')
// const { productsLoaded } = require('../actions')
const { Grid, Image } = require('semantic-ui-react')

const ProductsList = props => {
  // const { products } = props
  return (
    <Grid>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>
  )
}

module.exports = ProductsList
