import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ChatApi } from "../../../../services/ChatApi";
import { QUERY_DETAIL_DIALOG } from "../../../../services/QueryClient/ChatQueries";

const useCreateMessage = () => {
    const {userId} = useSelector(state => state.auth)
    const {query: {chatId}} = useRouter()
    const queryClient = useQueryClient()

    const createMessageMutation = useMutation(
        (data) => ChatApi.createMessage({...data, userId, chatId}),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(QUERY_DETAIL_DIALOG)
            }
        }
    )

    return createMessageMutation.mutate
}

export default useCreateMessage;