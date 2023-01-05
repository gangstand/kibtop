import UserAdevrts from "./UserAdevrts";

const UserAdevrtsContainer = () => {
    const adverts = [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
    ]

    return <UserAdevrts {...{adverts}} />;
}

export default UserAdevrtsContainer;