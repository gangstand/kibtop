import ChatNavBar from "../NavBar/ChatNavBar";

import ActiveDialog from "../ActiveDialog/ActiveDialog";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const DialogPlace = () => {
    const {t} = useLanguage();
    const router = useRouter();

    const [windowSize, setWindowSize] = useState();

    if (typeof window !== 'undefined') {
        window.addEventListener('resize', function() {
            setWindowSize(window.innerWidth);
        });
    }

    useEffect(()=>{setWindowSize(window.innerWidth);},[])

    return (
        <div className="container chat-place">
            {
                router.pathname === "/chat/[id]" && windowSize <= 799 
                ? null
                : <ChatNavBar />

            }

            <ActiveDialog />
            
        </div>
    );
}

export default DialogPlace;