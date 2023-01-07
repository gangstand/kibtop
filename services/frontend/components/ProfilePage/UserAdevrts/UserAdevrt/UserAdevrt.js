import EditAdvertButtonContainer from "./EditAdvertButton/EditAdvertButtonContainer";

const UserAdevrt = () => {
    return (
        <>
            <div className="advert advert--profile">
                <img src="/img/goods/camera.png" className="advert__img advert__img--profile" />

                <div className="advert__desc">
                    <div className="advert__column">
                        <h5 className="advert-title advert-title--profile">
                            Product name
                        </h5>

                        <p className="advert-cost advert-cost--desk advert-cost--profile">$1000</p>
                    
                        
                    </div>

                    <div className="advert__column advert__column--right">
                        <EditAdvertButtonContainer /> 

                        <p className="advert-cost advert-cost--mob advert-cost--profile">$1000</p>

                        <div className="advert__info advert__info--desk">
                            <p className="info-text">seller's address</p>
                            <p className="info-text">announcement date</p>
                        </div>
                    </div>

                    <div className="advert__info advert__info--mob">
                            <p className="info-text">seller's address</p>
                            <p className="info-text">announcement date</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserAdevrt;