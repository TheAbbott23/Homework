
function checkPassword (email, password) {
    if(email === 'shawn@psych.com'&& password === 'tearsforfears'){
        return "Welcome Shawn"
    } else {
        return "Unauthorized"
    }
}

// console.log(checkPassword('shawn@psych.com', 'tearsforfears'));

module.exports={
    checkPassword
}

