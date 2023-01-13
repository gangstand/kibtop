import { useSelector } from "react-redux";
import DetailCard from "./DetailCard";

const DetailCardContainer = () => {
    const advert = useSelector(state => state.advert)

    return <DetailCard {...advert} />;
}

export default DetailCardContainer;