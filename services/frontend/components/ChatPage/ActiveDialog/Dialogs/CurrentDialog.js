import ChatHeader from "../ActiveDialogComponents/ChatHeader";
import ChatInput from "../../ChatComponents/ChatInputs/ChatInput";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import VoidDialog from "./VoidDialog";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageComponent from "../ActiveDialogComponents/MessageComponent";
import AdvertisementComponent from "../ActiveDialogComponents/AdvertisementComponent";
import { append, set } from '../../../../store/slices/CurrentDialogSlice';
import MessagePlace from "../ActiveDialogComponents/MessagePlace";
import { useRouter } from "next/router";
import MediaModal from "../../ChatComponents/MediaModal";

const CurrentDialog = ({mediaModalActivity, setMediaModalActivity}) => {
    const {t} = useLanguage();
    const dispatch = useDispatch();
    const messages = useSelector(state => state.CurrentDialog.messages)
    const router = useRouter();

    // const [dialogMessages, setDialogMessages] = useState([])
    const [seller, setSeller] = useState({
        id: 'seller_id',
        username: 'penis',
        isVerified: false, 
        online: true,
        photo: 'https://s0.rbk.ru/v6_top_pics/media/img/5/00/756703327882005.jpg',
    })
    const [product, setProduct] = useState({
        title: 'some product',
        img: 'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png',
        userId: 'userId',
        category: 'reality',
        advertId: 'laksdj9u2etgn',
        cost: 1000-7,
        currency: '₤',
    })



    useEffect(()=>{
        let mes = fetchDialogByChatId('ebat` kakoy id');
        dispatch(set(mes));
    }, []);
    
    return (
        <>
            <ChatHeader seller={seller} />

            <AdvertisementComponent seller={seller} product={product} />
        
            <MessagePlace messages={messages}/>
            
            <ChatInput mediaModalActivity={mediaModalActivity} setMediaModalActivity={setMediaModalActivity} />
        </>
    );
}


export default CurrentDialog;


function fetchDialogByChatId(chatId) {
    // hard fetching with grapthQl

    const re = new RegExp(/[,\n ]/g);
        
    let a = `fgd sdfg dfg qwer gkmwe fgl;kdfg hwle hrgljw hedfg hjwefl khgjdflkghj hsdlkf`.replace(re, ' ').split(' ').filter((value, index, arr)=>{return value !== ''})

    let messages = [];
    const date = new Date();

    for (let i in a) {
        messages.push({
            id: i,
            text: a[i],
            owner: i%2==0 ? 'you' : 'seller',  
            time: date.toISOString(),
        }) 
    }

    messages[7] = {
        newDate: 'January 1000'
    }

    return messages;
}