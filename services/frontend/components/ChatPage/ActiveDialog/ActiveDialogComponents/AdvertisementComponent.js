import Link from "next/link";
import { useCurrency } from "../../../../locales/hooks/useCurrency";
import { useLanguage } from "../../../../locales/hooks/useLanguage";


function AdvertisementComponent({ talk,  advert }) {
    const {t} = useLanguage();
    const cur = useCurrency();

    /*
    //  "$": '$',
    // "€": '€',
    // "₤": '₤' 
    */
    const seller = talk || {}
    const product = advert || {}

    return (
        <>
            {
                seller.isVerified ? <>
                    <div className="chat-advertisement">
                        <div className="advertisement-container">
                            <div className="alert-scammers__main">{ t("Beware of scammers!") }</div>
                            <div className="alert-scammers__discription">{ t("Only real support support has a blue check mark") }</div>
                        </div>
                    </div>
                </> : <>
                    <div className="chat-advertisement chat-advertisement__not-verified">
                        <img className="product-preview" src={ product.img }></img>

                        <div className="product-title">
                            <div className="product__name ">{ product.title }</div>
                                <div className="product__cost">{cur.currency}{cur.countCurrencyPrice(product.cost, product.currency)}</div>
                        </div>
                    
                        <div className="advertisement__link">
                            <Link href={`/advert/${ product.category }/${ product.advertId }`}>{t("Go to the ad")}</Link>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default AdvertisementComponent;