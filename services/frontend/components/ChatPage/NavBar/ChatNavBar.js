import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ChatSearch from "../ChatComponents/ChatInputs/ChatSearch";
import NavBarDialogComponent from "./NavBarDialogComponent";

const ChatNavBar = ({extraClass, data}) => {
    return (
        <div className={`chat-navbar ${extraClass}`}>
            <ChatSearch />
                <div className="chat-container">
                        {data?.map((chat, index) => (<NavBarDialogComponent key={index} {...chat} />))}

                </div>
            
            
        </div>
);
}

export default ChatNavBar;