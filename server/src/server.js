const stoppable = require('stoppable');
const { app } = require('./controller');
const mongoose = require('mongoose');

const username = 'admin';
const password = 'privatesub';
const cluster = 'Cluster0';
const dbname = 'test';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 0,
    },
});

const userModel = mongoose.model('User', UserSchema);

const HTTP_PORT = parseInt(process.env.PORT || 8080, 10);
const server = stoppable(
    app.listen(HTTP_PORT, () => {
        console.log('Listen to ' + HTTP_PORT);
    })
);

mongoose
    .connect(
        `mongodb+srv://${username}:${password}@cluster0.odr7ei8.mongodb.net/?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log('mongodb connected'))
    .catch((err) => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('Connected successfully');
});

userModel.find((err, docs) => {
    if (!err) {
        console.log(docs);
    }
});

module.exports = server;

// Language: javascript
