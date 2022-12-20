import BurgerLocaleMenuContainer from "../HeaderService/BurgerLocaleMenu/BurgerLocaleMenuContainer";
import BurgerUserMenuContainer from "../HeaderService/BurgerUserMenu/BurgerUserMenuContainer";
import Locales from "./Locales/Locales";
import SupportNav from "./SupportNav/SupportNav";

const HeaderSettings = () => {
    return (
        <>
            <div className="header__settings">
                <div className="container">
                    <SupportNav />
                    <Locales/>
                </div>
            </div>
            <BurgerLocaleMenuContainer />
            <BurgerUserMenuContainer />
        </>
    );
}

export default HeaderSettings;