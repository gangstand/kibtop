import UserAdevrt from "./UserAdevrt/UserAdevrt";

const UserAdevrts = ({adverts}) => {
    return (
        <>
            <div className="profile__adverts">
                {
                    adverts.map(advert => <UserAdevrt key={advert.id} />)
                }
            </div>
        </>
    );
}

export default UserAdevrts;