import { Message } from '@material-ui/icons';
import React, { useState } from 'react';
import "./chatScreen.css";

import { Avatar } from '@mui/material';


function ChatScreen(){
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([
        {
        name: 'Ellen',
        image: "/Kafka 27s_Selfie_Proof.png",
        message: 'Whats up?',
        },
        {
            name: 'Ellen',
            image: "/Kafka 27s_Selfie_Proof.png",
            message: 'How is it going?',
        },
        {
            message: 'How is it going?',
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages( [...messages, {message: input}] );
        setInput("");
    };

    return (
        <div className='chatScreen'>
            
            <p className='chatScreen_timestamp'> YOU MATCHED A VOID WOMAN ON 18/09/2024</p>
            {messages.map( (message) => (
                message.name  ? (
                
             

                <div className='chatScreen__message'>
                    <Avatar 

                    className='chatScreen__image'
                    alt={message.name}
                    src={message.image}                 
                    />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>
                ) : ( 
                
                <div className='chatScreen__message'>
                    <p className='chatScreen__textUser'>{message.message}</p>
                </div>
                )



            ))}

            
                <form className='chatScreen_input'>
                    <input 
                    value = {input}
                    onChange={ e => setInput(e.target.value)}
                    className='chatScreen_inputField'
                    placeholder="Type a message..." 
                    type="text"
                    />

                    <button onClick={handleSend} type ="submit" className='chatScreen_inputButton'>SEND</button>
                </form>



        </div>
    )
}

export default ChatScreen;