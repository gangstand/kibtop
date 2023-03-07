import { BASE_URL } from "../../services/Instance";

const ChatPage = () => {
    try {
        const chatSocket = new WebSocket(
            'ws://'
            + '127.0.0.1:8000'
            + '/ws/chat/1/'
        );
    
        console.log(chatSocket);

        chatSocket.onmessage = function(event) {
            alert("Получены данные " + event.data);
        };
        
    } catch(err) {
        console.log(err);

    }
    
    return (
        <div>
            Enter
        </div>
    );
}

export default ChatPage;