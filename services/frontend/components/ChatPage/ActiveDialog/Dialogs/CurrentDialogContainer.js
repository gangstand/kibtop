import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ChatApi } from "../../../../services/ChatApi";
import { QUERY_CONNECTED_USERS, QUERY_DETAIL_DIALOG } from "../../../../services/QueryClient/ChatQueries";
import { addPropsToReactElement } from "../../../Utils/Utils";
import { useLoadingMessages } from "../../LoadingMessagesContext/useLoadingMessages";

const CurrentDialogContainer = ({children}) => {
    const {locale, query: {chatId}} = useRouter()
    const {userId, isAuthed} = useSelector(state => state.auth)
    const {removeFromLoading} = useLoadingMessages()

    const connectedUsers = useQuery(
        [QUERY_CONNECTED_USERS], 
        () => ChatApi.getConnectedUsers(),
        {
            enabled: isAuthed
        }
    )

    const {data} = useQuery(
        [QUERY_DETAIL_DIALOG, {locale, chatId, userId}],
        () => ChatApi.getUserDialogDetail(chatId, userId, locale),
        {
            enabled: !!userId && isAuthed,
            onSuccess: data => {
                const userMessages = data.messages.filter(msg => msg.authorId === userId)
                removeFromLoading(userMessages[userMessages.length - 1])
            }
        }
    )

    const updateMessageReaded = useMutation({
        mutationFn: (messages) => ChatApi.updateMessagesAsReaded(messages)
    })

    useEffect(() => {
        if(!data) return 

        const onlyUnreadIds = data?.messages.filter(msg => !msg.isRead && msg.authorId !== userId).map(msg => msg.messageId)
        if(onlyUnreadIds?.length > 0) updateMessageReaded.mutate(onlyUnreadIds)

    }, [data?.messages])

    return (
        <>
            {addPropsToReactElement(children, {...data, connectedUsers: connectedUsers.data})}
        </>
    );
}

export default CurrentDialogContainer;