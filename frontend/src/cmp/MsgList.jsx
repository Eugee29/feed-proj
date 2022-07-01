import { useEffect, useRef } from 'react'
import { MsgPreview } from './MsgPreview.jsx'

export const MsgList = ({ msgs }) => {
    const listRef = useRef()

    useEffect(() => {
        if (!msgs.length) return
        listRef.current.scrollTop = listRef.current.scrollHeight
    }, [msgs])

    if (!msgs.length) return

    return (
        <section className="msg-list main-layout" ref={listRef}>
            <ul className="msgs">
                {msgs.map((msg) => (
                    <MsgPreview key={msg._id} msg={msg} />
                ))}
            </ul>
        </section>
    )
}
