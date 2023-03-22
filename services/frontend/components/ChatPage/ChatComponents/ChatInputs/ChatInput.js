import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import _ChatInputComponent from "../Inputs/_ChatInputComponent";
import MediaModal from "../MediaModal";
import PaperClip from "../SVGComponents/PaperClip";
import SendButton from "../SVGComponents/SendButton";


let clearInput = (e) => {
    e.preventDefault();
    e.target[0].value = '';
}

function ChatInput({mediaModalActivity, setMediaModalActivity}) {
    const [text, setText] = useState();

    return (
        <div className="chat-input">
            <div className="input-container">
                <MediaModal modalActivity={mediaModalActivity} setMediaModalActivity={setMediaModalActivity}/>

                <PaperClip modalActivity={mediaModalActivity} setModalActivity={setMediaModalActivity}/>
                <_ChatInputComponent 
                    clearInput={clearInput} 
                    setText={setText} />
                <SendButton text={text} />
            </div>
        </div>
    );
}

export default ChatInput;