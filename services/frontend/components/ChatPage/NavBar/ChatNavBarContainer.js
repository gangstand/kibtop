import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ChatApi } from "../../../services/ChatApi";
import { QUERY_DIALOGS } from "../../../services/QueryClient/ChatQueries";
import { addPropsToReactElement } from "../../Utils/Utils";

const ChatNavBarContainer = ({children}) => {
    const {userId} = useSelector(state => state.auth)
    const {locale} = useRouter()
    const {data} = useQuery(
                            [QUERY_DIALOGS, userId, locale], 
                            () => ChatApi.getUserDialogs(userId, locale),
                            {
                                enabled: !!userId
                            }
                        )
    
    return (
        <>
            {addPropsToReactElement(children, {data})}
        </>
    );
}

export default ChatNavBarContainer;