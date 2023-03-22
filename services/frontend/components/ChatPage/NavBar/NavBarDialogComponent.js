import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';

import VerifiedAccFlag from "../ChatComponents/ChatStatuses/VerifiedAccFlag";
import UnreadMessages from "../ChatComponents/ChatStatuses/UnreadMessages";
import ReadUserMessage from '../ChatComponents/ChatStatuses/ReadUserMessage';
import { applingActive } from "../../../store/slices/MessagesSlice";
import { useState } from "react";

const NavBarDialogComponent = ({message}) => {
    const dispatch = useDispatch();

    const [windowSize, setWindowSize] = useState();

    if (typeof window !== 'undefined') {
        window.addEventListener('resize', function() {
            setWindowSize(window.innerWidth);
        });
    }


    return (
        <Link href={`/chat/${message.id}`}>
            <div className={ message.isActiveChat ? "nav-dialog__active" : "nav-dialog__passive"} onClick={() => {dispatch(applingActive(message.id))}}>
                <div className="nav-dialog">
                    {/* It is only user logotype */}
                    <div className="user-logo">
                        <img className="user-logo__image" src={ message.user.photo }></img>
                    </div>

                    {/* It is part with another payload (like username, last message date and another) */}
                    <div className="dialog-preview">

                        {/* This part contains username, verify star and date of last message */}
                        <div className="dialog-title">
                            <span className="dialog-title__username">{ message.user.username }</span>
                                { message.is_verified ? <VerifiedAccFlag /> : <span></span> }
                                <span className={ message.user.online ? "onlineFlag" : ""}></span>
                                <span className="dialog-time">
                                    { message.reciver=='you' ?  <ReadUserMessage isReadMessage={message.readMessage} /> : <span></span>}
                                { message.time }
                                </span>
                        </div>

                        {/* This part contains the part of the last message and their unread status */}
                        <div className="dialog-message">
                            <div className="dialog-message__text">
                                { message.text }
                            </div>
                            { message.readMessage && message.reciver=='another' ? (<UnreadMessages messagesCount={ message.unread_message_count } />) : <span></span> }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
} 

export default NavBarDialogComponent;