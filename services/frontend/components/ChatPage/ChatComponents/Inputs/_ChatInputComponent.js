import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import { append, set } from "../../../../store/slices/CurrentDialogSlice";


function _ChatInputComponent({ clearInput, setText }) {
    const {t} = useLanguage();
    const dispatch = useDispatch();
    const messages = useSelector(state => state.CurrentDialog.messages)

    return (
        <span className="chat-message__input" onSubmit={e => send(e, dispatch, append, clearInput, setText)} encType="multipart/form-data">
            <form className="chat-input__form">
                <div className="chat__field">
                    <input type="text" placeholder={t('Message search')} onChange={(e) => {setText(e.target.value)}} />
                </div>
            </form>
        </span>
    );
}

export default _ChatInputComponent;

function send(e, dispatch, append, clearInput, setText) { 
    const date = new Date();
    e.preventDefault();
    let currentMessageText = e.target.elements[0].value.trim();

    console.log(currentMessageText)
    if (currentMessageText !== ''){
        dispatch(append({
            owner: 'you',
            text: currentMessageText,
            // time:  `${date.getDay()} ${date.getMonth()} ${date.getHours()} ${date.getMinutes()}`
            time: date.toISOString()
        })); 
        clearInput(e); 
        setText("");
    }
}
