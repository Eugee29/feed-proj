import { useRef, useState } from 'react'

export const MsgSend = ({ sendMsg }) => {
    const [msg, setMsg] = useState({ txt: '', email: '' })

    const msgRef = useRef()

    const handleChange = (ev) => {
        setMsg({ ...msg, [ev.target.name]: ev.target.value })
    }

    const handleKeyDown = (ev) => {
        if (ev.key === 'Enter' && !ev.shiftKey) {
            ev.preventDefault()
            onSendMsg()
        }
    }

    const onSendMsg = (ev) => {
        if (ev) ev.preventDefault()
        if (!msg.email || !msg.txt) return
        sendMsg(msg)
        setMsg({ ...msg, txt: '' })
    }

    return (
        <section className="msg-send main-layout">
            <form className="send-form" onSubmit={onSendMsg}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="email"
                    autoComplete="off"
                    value={msg.email}
                    onChange={handleChange}
                />
                <textarea
                    placeholder="Message"
                    name="txt"
                    className="message"
                    value={msg.txt}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    ref={msgRef}
                />
                <button className="submit-btn">Submit</button>
            </form>
        </section>
    )
}
