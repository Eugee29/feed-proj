import { utilService } from '../services/util.service'

export const MsgPreview = ({ msg }) => {
    const avatarUrl = `https://www.gravatar.com/avatar/${utilService.hash(
        msg.email
    )}?d=https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png `

    return (
        <div className="msg-preview">
            <div className="avatar-container">
                <img className="avatar" src={avatarUrl} alt={msg.email} />
            </div>
            <h1 className="user-email">{msg.email}</h1>
            <h2 className="msg-txt">{msg.txt}</h2>
        </div>
    )
}
