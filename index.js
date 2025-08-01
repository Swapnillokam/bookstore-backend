const express = require('express')
const app = express()

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
require('dotenv').config()

async function main() {
    await mongoose.connect(process.env.DB_URL);

    app.use('/', (req, res) => { res.send('Book Store server is running') })
}
main().then(() => console.log("Mongo DB connected succesfully")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//password
// eyLr8fg5gFHU3TQs

//connection url
// mongodb+srv://swapnillokam29:eyLr8fg5gFHU3TQs@cluster0.875klfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0