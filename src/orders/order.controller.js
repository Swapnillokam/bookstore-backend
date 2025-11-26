const Order = require("./order.model")

const createOrder = async (req, res) => {
    try {
        const newOrder = await Order({ ...req.body })
        newOrder.save()
        res.status(200).send({ message: "Order created Sucessfully", order: newOrder })
    } catch (error) {
        console.error("Error creating order", error)
        res.status(500).send({ message: "Failed to create reder", Error: error })
    }
}

module.exports = { createOrder }