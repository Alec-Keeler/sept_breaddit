const exp = /^\(?\d{3}[\)-]\d{3}-\d{4}$/

function checkPhoneNum(phoneNum) {
    if (exp.test(phoneNum)) {
        return true 
        // console.log(true)
    } else {
        // console.log(false)
        return false
    }
}

// checkPhoneNum('(123)123-1234')

function phoneNumToInt(phoneNum) {
    // replace string method, pass in exp matching chars we want to remove and
    // some data we want to replace the old stuff with
    if (checkPhoneNum(phoneNum)) {
        const remove = /[\(\)-]/g
        const replace = ''
        const newNum = phoneNum.replace(remove, replace)
        console.log(newNum)
        console.log(parseInt(newNum, 10))
    } else {
        console.log('This is a bad phone number D:')
    }
}

phoneNumToInt('(123)123-1234')