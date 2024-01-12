const os = require('os');

function showMessage(username) {
    console.log(`Hello, dear ${username || os.userInfo().username}!`);
}

module.exports = {
    showMessage
}