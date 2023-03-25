import { useSelector } from "react-redux";
import HeaderService from "../../Header/HeaderService/HeaderService";
import ChatSearch from "../ChatComponents/ChatInputs/ChatSearch";
import ChatNavBar from "../NavBar/ChatNavBar";
import NavBarDialogComponent from "../NavBar/NavBarDialogComponent";
import SubTitle from "../PageParts/Subtitle";
import style from "./chat_nav.module.scss"

const ModileChatsNav = ({data}) => {
    const messages = useSelector(state => state.messages.messages);

    return (
        <>
            <div className={`${style.navBody} chat-mobile-elem`}>
                <HeaderService />
                    <SubTitle />

                    <ChatSearch />

                
                    <div className={`container ${style.navWrapper}`}>
                
                            <div className={style.chatsLent}>
                                    {data?.map((chat, index) => (<NavBarDialogComponent key={index} {...chat} />))}

                            </div>
                        
                        
                    </div>
            </div>
        </>
    );
}

export default ModileChatsNav;