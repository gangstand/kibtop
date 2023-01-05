const NameData = ({img, name, phone}) => {
    return (
        <>
            <div className="user__wrapper name-data">
                <div className="user__ava"></div>

                <div className="user__data">
                    <p className="user__name">{name}</p>
                    <p className="user__phone">{phone}</p>
                </div>
            </div>

        </>
    );
}

export default NameData;