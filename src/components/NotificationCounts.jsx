function NotificationCounts(props) {
    return (
        <div className="position-relative pe-2">
            <h1>Notifications</h1>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">
                {props.children}
                <span className="visually-hidden">unread messages</span>
            </span>
        </div>
    )
}

export default NotificationCounts