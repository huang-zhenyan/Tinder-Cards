import React from 'react'
import './Chat.css';
import Chat from "./Chat";

function Chats() {
    return (
        <div className = 'chats'>
            <Chat
                name = "AV"
                message = "YO WHATS UP!"
                timestamp = "40 seconds ago"
                profilePic = "https://scontent-yyz1-1.xx.fbcdn.net/v/t39.30808-6/270748454_2596636280479959_7901092657386566427_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0oMFqA_o5kQAX-ExE94&_nc_ht=scontent-yyz1-1.xx&oh=00_AT9Z3Q1PnhLiq0yySUR4EbGV_BJxqCdzc5204rC4I-mVbw&oe=62D82AA0"
            />
            <Chat
                name = "Emily"
                message = "EYO!"
                timestamp = "40 seconds ago"
                profilePic = "https://scontent-yyz1-1.xx.fbcdn.net/v/t1.6435-9/49129565_10205127875033459_8466400002443313152_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=mA77GYPPChYAX-jXI8H&_nc_ht=scontent-yyz1-1.xx&oh=00_AT-FLRlqebSu9h5oPTH27AMnIDmCgFrkkvjo3aMKdxPC-Q&oe=62F7D943"
            />
            <Chat
                name = "Andrew Tate"
                message = "Im a Top-G"
                timestamp = "10 hours ago"
                profilePic = ""
            />
        </div>
    )
}

export default Chats