import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ChatApi } from "../../../../services/ChatApi";
import { QUERY_CONNECTED_USERS, QUERY_DETAIL_DIALOG } from "../../../../services/QueryClient/ChatQueries";
import { addPropsToReactElement } from "../../../Utils/Utils";

const CurrentDialogContainer = ({children}) => {
    const {locale, query: {chatId}} = useRouter()
    const {userId, isAuthed} = useSelector(state => state.auth)
    const {data} = useQuery(
        [QUERY_DETAIL_DIALOG, locale, chatId, userId],
        () => ChatApi.getUserDialogDetail(chatId, userId, locale),
        {
            enabled: !!userId && isAuthed
        }
    )
    const connectedUsers = useQuery(
        [QUERY_CONNECTED_USERS], 
        () => ChatApi.getConnectedUsers(),
        {
            enabled: isAuthed
        }
    )

    return (
        <>
            {addPropsToReactElement(children, {...data, connectedUsers: connectedUsers.data})}
        </>
    );
}

export default CurrentDialogContainer;