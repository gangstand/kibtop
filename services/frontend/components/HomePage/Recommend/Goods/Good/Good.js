import { useCurrency } from "../../../../../locales/hooks/useCurrency";
import LikeButtonContainer from "../../../LikeButton/LikeButtonContainer";

const Good = ({id, img, title, cost, address, date, category}) => {
    const {currency} = useCurrency()
    return (
        <>
            <div className="goods__item">
                <div className="goods__img">
                    <img src={img} alt={title} />
                </div>

                <article className="goods__article">
                    <div>
                        <h5 className="goods__title">{title}</h5>
                        <h5 className="goods__cost">{currency} {cost}</h5>

                        <div className="goods__litle-info goods__litle-info--mobile">
                            <p className="goods__text">{address}</p>
                            <p className="goods__text">{date}</p>
                        </div>
                    </div>
                    <div className="goods__litle-info">
                        <LikeButtonContainer />
                        
                        <p className="goods__text">{address}</p>
                        <p className="goods__text">{date}</p>
                        
                    </div>

                    <h5 className="goods__cost goods__cost--mobile">{currency} {cost}</h5>
                </article>

                <LikeButtonContainer mobile={true} />

            </div>
        </>
    );
}

export default Good;