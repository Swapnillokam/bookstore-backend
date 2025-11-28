const express = require('express')
const app = express()  // server created
const cors = require('cors')
require('dotenv').config()

const connectDB = require('./src/Database/database');

//middleware
app.use(express.json())
app.use(cors(
    {
        origin: ['http://localhost:5173', 'https://bookstore-frontend-qv1j.vercel.app'],
        credentials: true,
    }
))

//connect to database
app.use(async(req,res,next)=>{
    await connectDB()
    next()
})

//routes
const bookRoutes = require('./src/books/book.route')
const orderRoutes = require('./src/orders/order.route')
const userRoutes = require('./src/users/user.route')
const adminRoutes = require('./src/stats/admin.stats')

app.use('/api/books', bookRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/auth', userRoutes)
app.use('/api/admin', adminRoutes)

app.get('/', (req, res) => { res.send('Book Store server is running') })

module.exports = app