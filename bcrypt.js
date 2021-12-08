const bcrypt = require('bcryptjs');

//hash
//compare

async function generatePw(password) {
    const hashedPass = await bcrypt.hash(password, 12)
    console.log(hashedPass);
}

// generatePw('hunter12')

const hash = '$2a$12$PavZ96oy5WpAMuLFSieNfupFsaxEz9vfaJ0OGLCaJeE7rW72lPzyi'

async function passwordCheck(password, hash) {
    const isPassword = await bcrypt.compare(password, hash)
    console.log(isPassword)
}

passwordCheck('hunter2', hash)