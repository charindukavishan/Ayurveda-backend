const mongoose = require('mongoose');

const mongoDb = process.env.MONGODB_URL || 'mongodb+srv://cdtcoders:charindu123@ayuruveda-k5k99.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoDb, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});