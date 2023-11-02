require('dotenv').config()

var Pushover = require('node-pushover')
var path = require('path');

const myFilePath = path.join(__dirname, './the-command-prompt.jpeg')
console.log(`Image path: ${myFilePath}`)

var push = new Pushover({
    token: process.env.APP_TOKEN,
    user: process.env.USERKEY
})

function notify() {
    console.log('running notify')
    push.send(
        process.env.USERKEY,
        "Subject goes here",
        "Message goes here",
        myFilePath,
        handleErrors
    )
}

function handleErrors(error, response) {
    console.log('running handling errors')
    if (error) console.log('error: ', error)
    console.log(response)
}

notify()
