import { useDispatch, useSelector } from "react-redux";
import { chunkMessagesByDate } from "../../../../services/tools/serializers/ChatSerializers";
import MessageComponent from "../../../ChatPage/ActiveDialog/ActiveDialogComponents/MessageComponent";
import VoidDialog from "../../../ChatPage/ActiveDialog/Dialogs/VoidDialog";
import Relative from "../../../Elementes/Relative/Relative";
import style from "../mobile_chat.module.scss"

const MobileMessages = ({messages, me}) => {
    return (
        <>
            <div className={style.messages}>
                {
                    !messages?.length
                        ?
                        <VoidDialog />  
                        :
                        <>
                            {
                                chunkMessagesByDate(messages).map((msgChunk, index) =>
                                    <Relative key={index}>
                                        <p className="dialog-day">{msgChunk[0]}</p>
                                        {msgChunk[1].map((message, index) => <MessageComponent key={index} {...{message, me}}/>)}
                                    </Relative>
                                )
                                
                            }

                        </>
                }
            </div>
            
        </>
    );
}

export default MobileMessages;