const mongoose = require('mongoose');

module.exports = async function () {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);  // 실패 시 종료
    }
};
