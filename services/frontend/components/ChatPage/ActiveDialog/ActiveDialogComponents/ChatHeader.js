import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import VerifiedAccFlag from "../../ChatComponents/ChatStatuses/VerifiedAccFlag";
import HeaderButton from "./_HeaderComponents/HeaderButton";
import LogoComponent from "./_HeaderComponents/LogoComponent";
import UsernameComponent from "./_HeaderComponents/UsernameComponent";

function ChatHeader({ seller }) {
    const router = useRouter();
    const {t} = useLanguage();

    const [windowSize, setWindowSize] = useState(0);

    if (typeof window !== 'undefined') {
        window.addEventListener('resize', function() {
            setWindowSize(window.innerWidth);
        });
    }

    if (windowSize >= 800) {
        return (
            <div className="dialog-header">
                <LogoComponent photo={seller.photo}/>

                <UsernameComponent username={seller.username} isVerified={seller.isVrified} online={seller.online}/>
            
                <HeaderButton condition={true} sellerId={seller.id} />
            </div>
            );}

    return (
        <div className="dialog-header">
                <HeaderButton condition={false} sellerId={seller.id} />

                <UsernameComponent username={seller.username} isVerified={seller.isVrified} online={seller.online}/>

                <LogoComponent photo={seller.photo}/>
        
        </div>
        );
}

export default ChatHeader;