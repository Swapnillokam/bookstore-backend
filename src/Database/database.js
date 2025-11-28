const mongoose = require('mongoose');

let isConnected = false;

async function connectDB() {
    if (isConnected) {
        return;
    }

    try {
        const db = await mongoose.connect(process.env.DB_URL);
        isConnected = db.connections[0].readyState === 1;
        console.log("MongoDB connected.");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

module.exports = connectDB;
