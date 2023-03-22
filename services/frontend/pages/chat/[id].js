import Head from "next/head";
import { useEffect } from "react";
import VoidDialog from "../../components/ChatPage/ActiveDialog/Dialogs/VoidDialog";
import Chat from "../../components/ChatPage/Chat";
import Header from "../../components/Header/Header";
import HeaderService from "../../components/Header/HeaderService/HeaderService";
import { useLanguage } from "../../locales/hooks/useLanguage";

export const getServerSideProps = async (context) => {

    const { id } = context.params;

    return {
        props: {
            currentDialogId: id
        }
    }
}


const Chats = ({currentDialogId}) => {
    const {t} = useLanguage()
    useEffect(()=>(console.log(currentDialogId)), [currentDialogId])

    const title = `Kibtop - ${t('Profile')}`
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kibtop.com" />
                <meta property="og:image" content="https://kibtop.com/img/kibtop.png" />
            </Head>

            <Chat />
        </>
    );
}

export default Chats;