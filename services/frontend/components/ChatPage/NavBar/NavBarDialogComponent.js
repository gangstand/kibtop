import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';

import VerifiedAccFlag from "../ChatComponents/ChatStatuses/VerifiedAccFlag";
import UnreadMessages from "../ChatComponents/ChatStatuses/UnreadMessages";
import ReadUserMessage from '../ChatComponents/ChatStatuses/ReadUserMessage';
import { applingActive } from "../../../store/slices/MessagesSlice";
import { useState } from "react";
import { useRouter } from "next/router";
import style from "./nav_bar.module.scss"
import Text from "../../Elementes/Text/Text";

const NavBarDialogComponent = ({chatId, talk, messages, me, unread, last}) => {
    const {query} = useRouter()
    const isActiveChat = chatId === +query.chatId
    return (
        <Link href={`/chat/${chatId}`} className={style.dialogWarpper} style={isActiveChat ? {backgroundColor: 'rgba(122, 177, 255, 0.2)'} : {}}>
            <div className={style.dialog}>
                    <img className={style.avatar} src={ talk.avatar }></img>

                    {/* It is part with another payload (like username, last message date and another) */}
                    <div className={style.dialogDatail}>

                        {/* This part contains username, verify star and date of last message */}
                        <div className={style.dialogHead}>
                            <h5 className={style.title}>
                                { talk.name }
                                { talk.isVerified && <VerifiedAccFlag /> }
                            </h5>
                            
                            <span className={style.time}>
                                {(!!last && last.authorId === me.userId) &&  <ReadUserMessage isReadMessage={last.isRead} /> }
                                <span>
                                    { last?.time }
                                </span>
                            </span>
                        </div>

                        {/* This part contains the part of the last message and their unread status */}
                        <div className={style.content}>
                            <p className={style.text}>
                                {
                                    !!last && <>
                                        {
                                            last.type === 'text' ? last.text :
                                            last.type === 'img' ? <Text content="Photo" /> : <Text content="Video" />
                                        }
                                    </>
                                }
                            </p>
                            
                            { (!!last && !last.isRead && last.authorId !== me.userId) && <div className={style.number}>{unread}</div> }
                            
                        </div>
                    </div>
            </div>
        </Link>
    );
} 

export default NavBarDialogComponent;