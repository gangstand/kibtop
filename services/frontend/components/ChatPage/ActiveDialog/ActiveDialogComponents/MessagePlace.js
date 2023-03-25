import { useEffect } from "react";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import DealClaims from "../../ChatComponents/DealClaims";
import MediaModal from "../../ChatComponents/MediaModal/MediaModal";
import VoidDialog from "../Dialogs/VoidDialog";
import MessageComponent from "./MessageComponent";
import style from "./message.module.scss"
import AdvertisementComponent from "./AdvertisementComponent";
import CurrentDialogContainer from "../Dialogs/CurrentDialogContainer";


function MessagePlace({messages, me}) {
    const {t} = useLanguage();
    return (
        // <div className="dialog-container">
        //     <div className="chat-main"> 
                
        //         {/* <DealClaims /> */}
        //         <div style={{height: 50}}></div>
        //     </div>
        // </div>

        <div className={style.dialog}>
            <div className={style.messages}>
                {
                    !messages?.length
                        ?
                        <VoidDialog />  
                        :
                        <>
                            {messages?.map((message, index) => 
                                <MessageComponent key={index} {...{message, me}}/>
                                )}
                        </>
                }

                
            </div>
        </div>
    );
}

export default MessagePlace;