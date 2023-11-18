const mongoose = require('mongoose');
const dotenv = require('dotenv')

const connectDb = async () => {
    try {
        dotenv.config()
        const connect = await mongoose.connect(process.env.url);
        console.log('Database is connected !!');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDb;