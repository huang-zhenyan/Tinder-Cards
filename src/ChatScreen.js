import React, { useState } from 'react';
import './ChatScreen.css';
import { Avatar } from '@material-ui/core';


function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Emily',
            image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/49129565_10205127875033459_8466400002443313152_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=mA77GYPPChYAX-jXI8H&_nc_ht=scontent-yyz1-1.xx&oh=00_AT-FLRlqebSu9h5oPTH27AMnIDmCgFrkkvjo3aMKdxPC-Q&oe=62F7D943',
            message: 'EYO'
        },
        {
            name: 'Emily',
            image: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/49129565_10205127875033459_8466400002443313152_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=mA77GYPPChYAX-jXI8H&_nc_ht=scontent-yyz1-1.xx&oh=00_AT-FLRlqebSu9h5oPTH27AMnIDmCgFrkkvjo3aMKdxPC-Q&oe=62F7D943',
            message: 'Hows it going!'
        },
        {
            message: 'Hi! How are you?'
        },
    ])

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput('');   
    }
 
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                YOU MATCHED WITH EMILY ON 10/08/20
            </p>
                {messages.map(message => (
                    message.name ? (
                    <div className = "chatScreen__message">
                        <Avatar
                            className='chatScreen__image'
                            alt={message.name}
                            src={message.image}
                        />
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                    ) : (
                        <div className="chatScreen__message">
                            <p className='chatScreen__textUser'>{message.message}</p>
                        </div>
                    )
                ))}

                <form className = "chatScreen__input">
                    <input 
                    value = {input}
                    onChange={(e) => setInput(e.target.value)}
                    className='chatScreen__inputField'
                    placeholder = "type a message..." />
                    <button onClick={handleSend} type="submit" className='chatScreen__inputButton'>SEND</button>
                </form>
            
        </div>
    );
    
}



export default ChatScreen