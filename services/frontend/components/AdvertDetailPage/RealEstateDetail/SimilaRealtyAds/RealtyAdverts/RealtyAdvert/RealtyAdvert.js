import LikeButtonContainer from "../../../../../HomePage/LikeButton/LikeButtonContainer";

const RealtyAdvert = ({advertId, category, title, cost, address, img, date, uploads}) => {
    return (
        <>
            <div className="mobile-realty-advert">
                <div className="mobile-realty-advert__slider">
                    <div className="mobile-realty-advert__line">

                        {
                            !!(uploads.length) ? <>
                                {
                                    uploads?.map((img, index) => <img src={img} key={index} className="mobile-realty-advert__item" />)

                                }
                            </> : <>
                                <div className="mobile-realty-advert__item" />
                                <div className="mobile-realty-advert__item" />
                                <div className="mobile-realty-advert__item" />
                            </>
                        }
                        

                    </div>
                </div>

                <div className="mobile-realty-advert__desc">
                    <p className="mobile-realty-advert__title">
                        3-room apartment <span className="title square">60,5m²</span>
                    </p>

                    <p className="advert-cost mobile-realty-advert__cost">
                        €405000
                    </p>

                    <div className="mobile-realty-advert__info">
                        <p className="info-text">seller's address</p>
                        <p className="info-text">announcement date</p>
                    </div>

                    <div className="mobile-realty-advert__like">
                        <LikeButtonContainer {...{id: advertId, category}} className={'mobile-realty-advert__btn'} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RealtyAdvert;