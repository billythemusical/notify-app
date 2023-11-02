require('dotenv').config()

var cron = require('node-cron')
var Pushover = require('node-pushover')

cron.schedule('*/5 * * * * *', notify)

var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USERKEY
})

function notify() {
    push.send("Test Subject", "My message", handleErrors)
}

function handleErrors(error, response) {
    if (error) console.log('error: ', error)
    console.log(response)
}
