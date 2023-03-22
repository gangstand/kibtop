import VerifiedAccFlag from "../../../ChatComponents/ChatStatuses/VerifiedAccFlag";

function UsernameComponent({username, isVerified, online}) {
    return (
        <div className="dialog-username">
            <div className="dialog-title__username">{ username }{ isVerified ? <VerifiedAccFlag/> : <span></span> }</div>
            { online ? <div className="">Online</div> : <div>Offline</div> }
        </div>
    );
}

export default UsernameComponent;