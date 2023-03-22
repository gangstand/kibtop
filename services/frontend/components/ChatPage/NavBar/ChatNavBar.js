import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ChatSearch from "../ChatComponents/ChatInputs/ChatSearch";
import NavBarDialogComponent from "./NavBarDialogComponent";

const ChatNavBar = () => {
    const messages = useSelector(state => state.messages.messages);
    
    return (
        <div className="chat-navbar">
            <ChatSearch />
            
            <div className="chat-container">
                {messages.map((message, index) => (<NavBarDialogComponent key={index} message={message} />))}
            </div>
            
        </div>
);
}

export default ChatNavBar;