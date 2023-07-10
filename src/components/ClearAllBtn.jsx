function ClearAllBtn({children, onNotificationsChange}) {
    return (
        <button
            className="notification-clear"
            onClick={onNotificationsChange}
        >{children}</button>
    )
}

export default ClearAllBtn