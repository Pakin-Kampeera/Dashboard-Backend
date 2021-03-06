const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const history = mongoose.model(
    'histories',
    new mongoose.Schema(
        {
            userId: {
                type: String
            },
            username: {
                type: String
            },
            message: {
                type: String
            },
            labels: {
                type: String
            },
            confidence: {
                type: String
            },
            time: {
                type: String
            }
        },
        { timestamps: true }
    ),
    'histories'
);

module.exports = history;
