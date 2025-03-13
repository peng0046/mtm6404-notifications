import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Create notifications array
const notificationData = [
  {
    "id": 1,
    "name": "Charlene Clements",
    "message": "Sunt aute mollit cupidatat nisi amet laborum et commodo ullamco incididunt velit Lorem labore."
  },
  {
    "id": 2,
    "name": "Krystal Glover",
    "message": "Id enim exercitation ex in in ut proident et ut Lorem veniam."
  },
  {
    "id": 3,
    "name": "Keller Wood",
    "message": "Laborum deserunt cillum est qui anim elit culpa ipsum anim dolor."
  },
  {
    "id": 4,
    "name": "Bates Valenzuela",
    "message": "Adipisicing consequat nisi est laborum minim aliqua id."
  },
  {
    "id": 5,
    "name": "Beverly Santana",
    "message": "Qui excepteur est laboris dolor ad officia in deserunt ipsum."
  }
];

function App() {
  const [notifications, setNotifications] = useState(notificationData);

  const removeNotification = (id) => {
    setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
  };

  const handleRemoveAll = () => {
    setNotifications([]);
  };

  const NotificationItem = ({ notification }) => {
    return (
      <div className="notification-item">
        <h3>{notification.name}</h3>
        <p>{notification.message}</p>
        <button onClick={() => removeNotification(notification.id)}>Dismiss</button>
      </div>
    );
  };

  const NotificationList = ({ notifications }) => {
    return (
      <div className='notifications'>
        {notifications.length > 0 ? (
          <div className='btn-container'>
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
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Notifications Center</h1>
      <NotificationList notifications={notifications} />
    </div>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
