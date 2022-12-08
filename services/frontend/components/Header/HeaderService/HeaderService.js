
import BurgerLocaleMenuContainer from "./BurgerLocaleMenu/BurgerLocaleMenuContainer";
import BurgerUserMenuContainer from "./BurgerUserMenu/BurgerUserMenuContainer";
import Logo from "./Logo/Logo";
import MobileFilterButtonContainer from "./Services/SearchProducts/MobileFilterButton/MobileFilterButtonContainer";
import Services from "./Services/Services";

const HeaderService = () => {
    return (
        <>
            <div className="header__service">
                <div className="container container--header">
                    <Logo />
                    <Services />
                </div>
            </div>
            <BurgerLocaleMenuContainer />
            <BurgerUserMenuContainer />
        </>
        
    );
}

export default HeaderService;