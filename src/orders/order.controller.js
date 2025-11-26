const Order = require("./order.model")

const createOrder = async (req, res) => {
    try {
        const newOrder = await Order({ ...req.body })
        newOrder.save()
        res.status(200).send({ message: "Order created Sucessfully", order: newOrder })
    } catch (error) {
        console.error("Error creating order", error)
        res.status(500).send({ message: "Failed to create order", Error: error })
    }
}

const getOrderByEmail = async (req, res) => {
    try {
        const { email } = req.params
        const orders = await Order.find({ email }).sort({ createdAt: -1 })
        if (!orders)
            return res.status(404).json({ message: "Order not found" })
        res.status(200).json({ orders })
    } catch (error) {
        console.error("Error fetching order", error)
        res.status(500).send({ message: "Failed to fetch order", Error: error })
    }
}

const deleteOrders = async (req, res) => {
    try {
        const { email } = req.params; // or req.query

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        // Delete all orders for that email
        const result = await Order.deleteMany({ email });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "No orders found for this email"
            });
        }

        res.status(200).json({
            message: "Orders deleted successfully",
            deletedCount: result.deletedCount
        });

    } catch (error) {
        console.error("Error deleting orders:", error);
        res.status(500).json({
            message: "Failed to delete orders",
            error
        });
    }
};

module.exports = { createOrder, getOrderByEmail, deleteOrders }