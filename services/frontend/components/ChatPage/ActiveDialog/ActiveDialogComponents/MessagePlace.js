import { useEffect } from "react";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import DealClaims from "../../ChatComponents/DealClaims";
import MediaModal from "../../ChatComponents/MediaModal";
import VoidDialog from "../Dialogs/VoidDialog";
import MessageComponent from "./MessageComponent";


function MessagePlace({messages}) {
    const {t} = useLanguage();

    useEffect(()=>{console.log(messages)}, [])
    return (
        <div className="dialog-container">
            <div className="chat-main"> 
                {
                    messages.length==0
                        ?
                        <VoidDialog />  
                        :
                        <>
                            {messages.map(message => 
                                <MessageComponent message={message}/>
                                )}

                        </>
                }

                {/* <DealClaims /> */}
                <div style={{height: 50}}></div>
            </div>
        </div>
    );
}

export default MessagePlace;