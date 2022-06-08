const stoppable = require('stoppable');
const { app } = require('./controller');
const mongoose = require('mongoose');
const subscriptionModel = require('./models/subscription');
const userModel = require('./models/user');
const username = 'admin';
const password = 'privatesub';

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

const subs = subscriptionModel.findById('629fe59befec98c376f56d2a');
console.log(subs);

module.exports = server;

// Language: javascript
