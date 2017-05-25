const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const publicPath = path.join(__dirname, '/public')
const staticMiddleware = express.static(publicPath)

app.use(staticMiddleware)
app.use(bodyParser.json())

const products = [
  {
    id: 1,
    productName: 'Aqua Tunic',
    price: 10.99,
    description: 'Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh.',
    imageLink: 'http://photobyjohnny.com/ITEM_IMAGE/WT1036/WT1036-AQUA-5.jpg'
  },
  {
    id: 2,
    productName: 'Black Tunic',
    price: 12.99,
    description: 'Ullamco laboris nisi ut aliquid ex ea commodi consequat.',
    imageLink: 'http://photobyjohnny.com/ITEM_IMAGE/WT1/WT1-BLACK-2.jpg'
  },
  {
    id: 3,
    productName: 'Coral Tunic',
    price: 12.99,
    description: 'Ullamco laboris nisi ut aliquid ex ea commodi consequat.',
    imageLink: 'http://photobyjohnny.com/ITEM_IMAGE/WT1037/WT1037-CORAL-1.jpg'
  },
  {
    id: 4,
    productName: 'Blue Tunic',
    price: 12.99,
    description: 'Ullamco laboris nisi ut aliquid ex ea commodi consequat.',
    imageLink: 'http://photobyjohnny.com/ITEM_IMAGE/WT1038/WT1038-COBALT_BLUE-1.jpg'
  }
]

app.get('/products', (req, res) => {
  console.log('products', products)
  res.json(products)
})

app.post('/products', (req, res) => {
  const product = req.body
  products.push(product)
  res.status(201).json(products)
})

const PORT = 3000

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
