import md5 from 'md5'

export const utilService = {
    hash,
}

function hash(email) {
    return md5(email.toLowerCase())
}
