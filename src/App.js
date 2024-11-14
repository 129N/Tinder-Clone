//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Fotter from './Fotter';

import { CSSTransition,TransitionGroup } from 'react-transition-group';

//import IconButton from "@mui/material/IconButton";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import PersonIcon from './PersonIcon';

import ProfilePage from './ProfilePage';

import { getAuth, onAuthStateChanged } from "firebase/auth";



function App() {


  const location = useLocation(); 

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in with UID:", user.uid);
      } else {
        console.log("No user is signed in.");
      }
    });
  }, []);


  return (
    <div className="App">
        
        



<TransitionGroup>
<CSSTransition key={location.key} classNames="page" timeout={400}>


    <Routes location={location} >

    <Route path="/chats" element={<ChatPage />} />
    <Route path="/chats/:person" element={<ChatScreens /> }  />
   
    <Route path="/" element={<HomePage />} />
   
    <Route path="/Itsuku" element={<Itsukupage />}  />
    <Route path="/PersonIconPage" element={<PersonIconPage />} />
    <Route path="/profile/:name" element={<ProfilePage_Const />} /> {/* Profile route */}
 
    </Routes>
    
    </CSSTransition>
    </TransitionGroup>
    




    


 



    </div>
  );
}


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in with UID:", user.uid);
  } else {
    console.log("No user is signed in.");
  }
});


const HomePage = () => {
  return<div >
  <Header />
        <div className="app__background">
          <TinderCards />
          <SwipeButtons />
        </div>
  <Fotter />
</div>

};

const ChatPage = () => {
  return<div> 
 

  <Header backButton="/"/> 
  <Chats />
  </div>
};

const ChatScreens = () => {
  return<div> 
 

  <Header backButton="/chats"/> 
  <ChatScreen />
  </div>
};


const Itsukupage = () => {
  return <div>

<Header />
  <TinderCards />
</div>
};

const PersonIconPage = () => {
  return <div>
    <Header  backButton="/"/>
    <PersonIcon/>
    <Fotter />
  </div>
};

const ProfilePage_Const = () => {
  return (  <div >
    <Header  backButton="/"/> 
    <ProfilePage/>
    <Fotter />

  </div>
  );
};
export default App;

{ /*<Header />*/}
  
      {/* Tinder Cards */}
      {/* Button below tinder cards  */}
{/*<h1> Let's build a tinder Clone App 🚀!!</h1> */}

      {/* Chat Screen */}
      {/* Individual chat screen */}