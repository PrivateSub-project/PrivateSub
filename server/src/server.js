const stoppable = require('stoppable');
const { app } = require('./controller');

const HTTP_PORT = parseInt(process.env.PORT || 8080, 10);
const server = stoppable(
    app.listen(HTTP_PORT, () => {
        console.log('Listen to ' + HTTP_PORT);
    })
);

module.exports = server;


// Language: javascript