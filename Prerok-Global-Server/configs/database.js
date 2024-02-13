const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.DB_URI)
    console.log('db connected');
} catch (error) {
    console.log(`db is not connected ${error.message}`);
    process.exit(1);
}