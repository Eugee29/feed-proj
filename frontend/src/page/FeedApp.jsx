import { useEffect, useState } from 'react'

import { msgService } from '../services/msg.service'
import { socketService } from '../services/socket.service'

import { MsgList } from '../cmp/MsgList'
import { MsgFilter } from '../cmp/MsgFilter'
import { MsgSend } from '../cmp/MsgSend'

export const FeedApp = () => {
    const [msgs, setMsgs] = useState([])
    const [filterBy, setFilterBy] = useState({ keyword: '' })

    useEffect(() => {
        loadMsgs()
        return () => {
            socketService.off('new-msg')
        }
    }, [])

    useEffect(() => {
        socketService.on('new-msg', (msg) => setMsgs([...msgs, msg]))
    }, [msgs])

    const loadMsgs = async () => {
        const msgs = await msgService.query()
        setMsgs(msgs)
    }

    const sendMsg = async (msg) => {
        const newMsg = await msgService.add(msg)
        setMsgs([...msgs, newMsg])
    }

    const filterMsgs = (msgs) => {
        if (!filterBy.keyword) return msgs
        const regex = new RegExp(filterBy.keyword, 'i')
        return msgs.filter(
            (msg) => msg.txt.match(regex) || msg.email.match(regex)
        )
    }

    return (
        <main className="feed-app">
            <MsgSend sendMsg={sendMsg} />
            <MsgFilter filterBy={filterBy} setFilterBy={setFilterBy} />
            <MsgList msgs={filterMsgs(msgs)} />
        </main>
    )
}
