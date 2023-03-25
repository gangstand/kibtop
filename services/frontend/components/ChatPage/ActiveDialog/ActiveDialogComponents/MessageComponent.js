import { useRouter } from "next/router";
import { useEffect, useRef } from "react";


function MessageComponent({ message, me }) {
    const messagePlace = useRef();
    const router = useRouter();

    useEffect(()=>{
        messagePlace.current?.scrollIntoView();
    }, [messagePlace, router]);
    

    return (
        <div className={"message " + (message.authorId === me.userId ? 'message__user' : 'message__seller')} ref={messagePlace}>
            <div className={'message-style ' + (message.authorId === me.userId ? 'message-style__user' : 'message-style__seller')}>{message.text}</div>
            <div className="message__time" style={message.authorId === me.userId?{textAlign:'right'}:{textAlign:'left'}}>{ message.time }</div>
        </div>
    );
}

export default MessageComponent;