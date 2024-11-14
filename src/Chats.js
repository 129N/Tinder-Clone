import React from 'react';
import "./Chats.css";
import Chat from './Chat';

function Chats(){
    return ( <div className='chats'>
        <Chat 
        name = "Mark"
        message = "Yo whats up!!"
        timestamp = "40 secs ago"
        profilePic ="/tinder-logo-app-iphone-icon-11646505301w8m3i7fwe3.png"
        
        />

        <Chat 
        name = "Void Woman"
        message = "How is it going?!"
        timestamp = "?????"
        profilePic ="/Kafka 27s_Selfie_Proof.png"
        
        />  
        
        <Chat 
        name = "Ann"
        message = "Yo whats up!!"
        timestamp = "40 secs ago"
        profilePic ="/tinder-logo-app-iphone-icon-11646505301w8m3i7fwe3.png"
        /> 
        
        <Chat 
        name = "FBI"
        message = "Yo whats up!!"
        timestamp = "40 secs ago"
        profilePic ="/tinder-logo-app-iphone-icon-11646505301w8m3i7fwe3.png"
        /> 

        <Chat 
        name = "Big bang"
        message = "The begin!!"
        timestamp = "1million years ago"
        profilePic ="/tinder-logo-app-iphone-icon-11646505301w8m3i7fwe3.png"
        
        /> 
        
        </div>
    );
}

export default Chats;
