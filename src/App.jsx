import './App.css';
import Profile from './components/Profile/Profile';
import Mailbox from './components/Mailbox/Mailbox';

function App() {
  return (
    <>
      <div>
        <h1>Best selling</h1>
        <Profile name="Tacos With Lime" price={10.99} />
        <Profile
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
      </div>
      <div>
        <Mailbox username={'Marco'} />
      </div>
    </>
  );
}

export default App;
