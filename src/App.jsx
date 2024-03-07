import './App.css';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import userData from './components/Profile/userData/userData.json';
import friendData from './components/FriendList/data/friendData.json';

function App() {
  return (
    <>
      <Profile data={userData} />
      <FriendList data={friendData} />
    </>
  );
}

export default App;
