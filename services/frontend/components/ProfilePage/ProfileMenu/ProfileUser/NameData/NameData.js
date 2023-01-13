import Link from "next/link";

const NameData = ({avatar, name, surname}) => {
    return (
        <>
            <div className="user__wrapper name-data">
                {
                    !!avatar ? <img src={avatar} className="user__ava" /> 
                             : <Link href="/profile/edit" className="user__ava" />
                }
                

                <div className="user__data">
                    <p className="user__name">{name}</p>
                    <p className="user__name">{surname}</p>
                </div>
            </div>

        </>
    );
}

export default NameData;