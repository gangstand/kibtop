import { useSelector } from "react-redux";
import RealtyParameter from "./RealtyParameter";

const RealtyParameterContainer = ({serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert

    return <RealtyParameter {...advert} />;
}

export default RealtyParameterContainer;