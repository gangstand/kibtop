const UnreadMessages = ({messagesCount}) => {
    return (
        <span className="unreadMessages">
            { messagesCount }
        </span>
    );
}

export default UnreadMessages;