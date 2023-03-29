import { useState } from "react";
import ChatHeader from "../../ChatPage/ActiveDialog/ActiveDialogComponents/ChatHeader";
import ChatInput from "../../ChatPage/ChatComponents/ChatInputs/ChatInput";
import SubTitle from "../../ChatPage/PageParts/Subtitle";
import Header from "../../Header/Header";
import HeaderService from "../../Header/HeaderService/HeaderService";
import MobileMessages from "./MobileMessages/MobileMessages";
import MobileChatHeader from "./MobileChatHeader/MobileChatHeader";
import style from "./mobile_chat.module.scss"
import AdvertisementComponent from "../../ChatPage/ActiveDialog/ActiveDialogComponents/AdvertisementComponent";
import ChatNavBarContainer from "../../ChatPage/NavBar/ChatNavBarContainer";
import CurrentDialogContainer from "../../ChatPage/ActiveDialog/Dialogs/CurrentDialogContainer";

const MobileCurrentChat = () => {
    

    return (
        <>
            <div className={`${style.chatBody} chat-mobile-elem`}>
                <CurrentDialogContainer>
                    <MobileChatHeader />
                </CurrentDialogContainer>
                
                
                
                <div className={`container ${style.dialogMain}`}>
                    <CurrentDialogContainer>
                        <AdvertisementComponent />
                    </CurrentDialogContainer>  
                    
                    <CurrentDialogContainer>
                        <MobileMessages />
                    </CurrentDialogContainer>
                </div>

                <ChatInput  />
            </div>
        </>
    );
}

export default MobileCurrentChat;