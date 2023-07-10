
function CloseBtn({notification, onNotificationsChange}) {
    function deleteNotification() {
        onNotificationsChange(
            updatedNotificationList => updatedNotificationList.filter(
                updatedNotificationItem => updatedNotificationItem.id !== notification.id
            )
        )
    }

    return (
        <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={deleteNotification}
        ></button>
    )
}

export default CloseBtn