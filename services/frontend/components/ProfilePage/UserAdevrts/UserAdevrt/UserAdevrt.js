import Link from "next/link";
import { useCurrency } from "../../../../locales/hooks/useCurrency";
import { BASE_URL } from "../../../../services/Instance";
import EditAdvertButtonContainer from "./EditAdvertButton/EditAdvertButtonContainer";

const UserAdevrt = ({id, title, cost, address, img, date}) => {
    const {currency} = useCurrency()
    return (
        <>
            <Link href={'/adverts/'+id} className="advert">
                <img src={img} className="advert__img" />

                <div className="advert__desc">
                    <div className="advert__column">
                        <h5 className="advert-title">
                            {title}
                        </h5>

                        <p className="advert-cost advert-cost--desk">{currency} {cost}</p>
                    
                        
                    </div>

                    <div className="advert__column advert__column--right">
                        <EditAdvertButtonContainer /> 

                        <p className="advert-cost advert-cost--mob">{currency} {cost}</p>

                        <div className="advert__info advert__info--desk">
                            <p className="info-text">{address}</p>
                            <p className="info-text">{date}</p>
                        </div>
                    </div>

                    <div className="advert__info advert__info--mob">
                            <p className="info-text">{address}</p>
                            <p className="info-text">{date}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default UserAdevrt;