import { useState } from 'react';
import './App.css';
import notificationsData from './notifications.js'; 

function App() {
  const [notifications, setNotifications] = useState(notificationsData); 

  const removeNotification = (id) => {
    setNotifications((prevNotifications) => 
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setNotifications([]);
  };

  const NotificationItem = ({ notification }) => (
    <div className="notification-item">
      <h3>{notification.name}</h3>
      <p>{notification.message}</p>
      <button onClick={() => removeNotification(notification.id)}>Dismiss</button>
    </div>
  );

  const NotificationList = ({ notifications }) => (
    <div className="notifications">
      {notifications.length > 0 ? (
        <div className="btn-container">
          <button className="warning" onClick={handleRemoveAll}>Dismiss all</button>
        </div>
      ) : (
        <strong>No Notifications</strong>
      )}
      {notifications.map(notification => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );

  return (
    <div className="App">
      <h1>Notifications Center</h1>
      <NotificationList notifications={notifications} />
    </div>
  );
}

export default App;