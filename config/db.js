const mongoose = require('mongoose');

const mongoDb = process.env.MONGODB_URL || 'mongodb://localhost:27017/ayurveda';

mongoose.connect(mongoDb, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});