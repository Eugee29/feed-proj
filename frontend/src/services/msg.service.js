import { httpService } from './http.service.js'
import { socketService } from './socket.service.js'

const URL_KEY = 'msg'

export const msgService = {
    query,
    add,
}

async function query() {
    try {
        return await httpService.get(URL_KEY)
    } catch (err) {
        console.log(err)
    }
}

async function add(msg) {
    try {
        const newMsg = await httpService.post(URL_KEY, msg)
        socketService.emit('msg-sent', newMsg)
        return newMsg
    } catch (err) {
        console.log(err)
    }
}
