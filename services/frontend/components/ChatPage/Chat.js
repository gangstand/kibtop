import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";

import SubTitle from './PageParts/Subtitle'
import DialogPlace from "./PageParts/DialogPlace";

import { useEffect, useState } from "react";
import { useLanguage } from "../../locales/hooks/useLanguage";
import { useRouter } from "next/router";
import { BASE_URL } from "../../services/Instance";


const Chat = ({categoryAdverts, pages}) => {
    const {t} = useLanguage();
    const router = useRouter();    

    const [windowSize, setWindowSize] = useState();

    if (typeof window !== 'undefined') {
        window.addEventListener('resize', function() {
            setWindowSize(window.innerWidth);
        });
    }

    useEffect(()=>{
        setWindowSize(window.innerWidth);
        
    }, [])

    try {
        const socket = new WebSocket(`ws://127.0.0.1:8000/1`)
        socket.onopen = (e) => console.log('прив');
        socket.onmessage = (e) => console.log(e);
    } catch(e) {
        console.log(e);
    }




    return (
        <>
            { router.pathname==="/chat/[id]" && windowSize < 801 ? 
            <>
                <div className="main">
                    <DialogPlace />
                </div>
            </> 
            :
            <>
            <Header />
            <HeaderService />
            <div className="main">
                <SubTitle />
            
                <DialogPlace />
            </div>
            </> 
            }
        </>
    );
}

export default Chat;