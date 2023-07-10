import CloseBtn from "./CloseBtn"

function NotificationItem({notification, onNotificationsChange}) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{notification.name}</h5>
                <p className="card-text">{notification.message}</p>
            </div>
            <CloseBtn
                notification={notification}
                onNotificationsChange={onNotificationsChange}
            />
        </div>
    )
}

export default NotificationItem