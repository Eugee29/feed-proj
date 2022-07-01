const logger = require('../../services/logger.service')
const dbService = require('../../services/db.service')

module.exports = {
    query,
    add,
}

async function query() {
    try {
        const collection = await dbService.getCollection('msg')
        const msgs = await collection.find({}).sort({ createdAt: 1 }).toArray()
        return msgs
    } catch (err) {
        logger.error('cannot find msgs', err)
        throw err
    }
}

async function add(msg) {
    msg.createdAt = Date.now()
    try {
        const collection = await dbService.getCollection('msg')
        const result = await collection.insertOne(msg)
        return result.ops[0]
    } catch (err) {
        logger.error('cannot add msg', err)
        throw err
    }
}
