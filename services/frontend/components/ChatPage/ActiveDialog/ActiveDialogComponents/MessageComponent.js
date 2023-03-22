import { useRouter } from "next/router";
import { useEffect, useRef } from "react";


function MessageComponent({ message }) {
    const messagePlace = useRef();
    const router = useRouter();

    useEffect(()=>{
        messagePlace.current?.scrollIntoView();
    }, [messagePlace, router]);
    
    if (message.newDate) {
        return (
            <div className={"message message-date"} ref={messagePlace}>
                {message.newDate}
            </div>
        )
    }

    return (
        <div className={"message " + (message.owner==='you' ? 'message__user' : 'message__seller')} ref={messagePlace}>
            <div className={'message-style ' + (message.owner==='you' ? 'message-style__user' : 'message-style__seller')}>{message.text}</div>
            <div className="message__time" style={message.owner==='you'?{textAlign:'right'}:{textAlign:'left'}}>{ message.time }</div>
        </div>
    );
}

export default MessageComponent;