const logger = require('../../services/logger.service')
const msgService = require('./msg.service')

module.exports = {
    getMsgs,
    addMsg,
}

async function getMsgs(_, res) {
    try {
        const msgs = await msgService.query()
        res.send(msgs)
    } catch (err) {
        logger.error('cannot get msgs', err)
        res.status(500).send(err)
    }
}

async function addMsg(req, res) {
    try {
        const msg = await msgService.add(req.body)
        res.send(msg)
    } catch (err) {
        logger.error('cannot add msg', err)
        res.status(500).send(err)
    }
}
