import { useState } from 'react'
import notifications from './notifications'
import './assets/app.scss'
import NotificationBar from './components/NotificationBar'
import ClearAllBtn from './components/ClearAllBtn'
import NotificationList from './components/NotificationList'
import NotificationItem from './components/NotificationItem'
import NotificationCounts from './components/NotificationCounts'

function App() {
  const [notificationItems, setNotificationItems] = useState(notifications)

  function changeNotifications(updatedNotifications) {
    setNotificationItems(updatedNotifications)
  }

  function clearAllNotifications() {
    setNotificationItems([])
  }
  
  return (
    <div className="container">
      <div className="notification-container">
        <NotificationBar>
          <NotificationCounts>{notificationItems.length}</NotificationCounts>
          <ClearAllBtn onNotificationsChange={clearAllNotifications}>Clear all</ClearAllBtn>
        </NotificationBar>
        {
          notificationItems.length !== 0 ? 
          <NotificationList>
            {notificationItems.map(notification => 
              <NotificationItem
                key={notification.id}
                notification={notification}
                onNotificationsChange={changeNotifications}
              />
            )}
          </NotificationList> : 
          <p className="notification-empty">The notification is empty.</p>
        }
      </div>
    </div>
  )
}

export default App
