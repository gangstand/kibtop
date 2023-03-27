import { createHeaders, instance } from "./Instance"
import {serializeChatDialogDetail, serializeChatMessage, serializeChats, serializeMessageForm} from "./tools/serializers/ChatSerializers"

export const ChatApi = {
    async getUserDialogs(userId, lang) {
        return await instance.get(`chat/group/?members=${userId}`)
            .then((res) => {
                    console.log(res.data);
                    return serializeChats(res.data, userId, lang)
            }).catch(e => console.log(e))
            
    },

    async getConnectedUsers() {
        return await instance.get(`chat/connected/`, {
            headers: await createHeaders()
        }).then(({data}) => {
            return data.map(con => con.user_id)
        }).catch(e => console.log(e))
    },

    async getUserDialogDetail(chatId, userId, lang) {
        return await instance.get(`chat/group/${chatId}/`)
            .then(res => {
                return serializeChatDialogDetail(res.data, userId, lang)
            }).catch(e => console.log(e))
    },

    async createMessage(message) {
        return await instance.post('chat/messages/', serializeMessageForm(message))
            .then(({data}) => {
                console.log(serializeChatMessage(data));
                return serializeChatMessage(data)
            }).catch(e => console.log(e))
    }
}