const express = require('express')

const db = require('./utils/database')
const initModels = require('./models/initModels')
const config = require('./config')
const productsRouter = require('./products/products.router')

const app = express()

const {port} = require('./config')

db.authenticate()
    .then(() => console.log('DB Authentication Successfully'))
    .catch((err) => console.log(err))

db.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.log(err))

initModels()

app.use('/products', productsRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK!'})
})

app.listen(port, () => {
    console.log(`Server started at port ${config.port}`)
})




