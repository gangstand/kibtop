import Locales from "./Locales/Locales";
import SupportNav from "./SupportNav/SupportNav";

const HeaderSettings = () => {
    return (
        <div className="header__settings">
            <div className="container">
                <SupportNav />

                <Locales/>
            </div>
        </div>
    );
}

export default HeaderSettings;