// /* eslint-disable no-unused-vars */
// const mongoose = require('mongoose');

// let Schema = mongoose.Schema;
// // eslint-disable-next-line no-unused-vars
// let Subscription;

// const SubscriptionSchema = new mongoose.Schema({
//     serviceName: {
//         type: String,
//         required: true,
//     },
//     startDate: {
//         type: Date,
//     },
//     endDate: {
//         type: Date,
//     },
//     creditCardId: {
//         type: Number,
//     },
//     userId: {
//         type: Number,
//     },
// });
// let mongoDBConnectionString = `mongodb+srv://admin:privatesub@cluster0.odr7ei8.mongodb.net/PrivateSub?retryWrites=true&w=majority`;

// module.exports.connect = function () {
//     return new Promise(function (resolve, reject) {
//         let db = mongoose.createConnection(mongoDBConnectionString, {
//             useUnifiedTopology: true,
//         });

//         db.on('error', (err) => {
//             reject(err);
//         });

//         db.once('open', () => {
//             Subscription = db.model('Subscriptions', SubscriptionSchema);
//             console.log('mongodb connection for sub established');
//             resolve();
//         });
//     });
// };

// module.exports.addSubscription = function (Data) {
//     return new Promise(function (resolve, reject) {
//         console.log('data', Data);

//         const subscriptionModel = mongoose.model(
//             'Subscription',
//             SubscriptionSchema
//         );
//         let newSubscription = new subscriptionModel(Data);
//         console.log('new subscription', newSubscription);
//         newSubscription.save((err) => console.log(err));
//     });
// };
