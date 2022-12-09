import HeaderService from "../Header/HeaderService/HeaderService";
import BannerContainer from "./Banner/BannerContainer";
import CategoriesNav from "./CategoriesNav/CategoriesNav";
import HomePageHead from "./HomePageHead";
import News from "./News/News";
import Recommend from "./Recommend/Recommend";

const HomePage = ({slides, recommendGoods, newGoods}) => {

    return (
        <>
            <HomePageHead />

            <HeaderService />
            <CategoriesNav />
            <BannerContainer {...{slides}} />
            <Recommend {...{recommendGoods}} />
            <News {...{newGoods}} />
        </>
    );
}

export default HomePage;