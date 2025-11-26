const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   address: {
      city: {
         type: String,
         required: true,
      },
      state: {
         type: String,
      },
      country: {
         type: String,
      },
      zipcode: {
         type: String,
      },
   },
   phone: {
      type: Number,
      required: true,
   },
   productIds: [ 
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Book', //takes the reference of Books schema since the preoductIds is the array of Books
         required: true,
      }
   ],
   totalPrice: {
      type: Number,
      required: true,
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
}, {
   timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);
// const Book = mongoose.model('Order', orderSchema); do not write this way because in DB it will be converted to plural and small letters (i.e books)

module.exports = Order;