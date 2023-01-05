import Header from "../../../components/Header/Header";
import HeaderService from "../../../components/Header/HeaderService/HeaderService";
import Settings from "../../../components/SettingsPage/Settings";

const settings = () => {
    return (
        <>
            <Header />
            <HeaderService />
            <Settings />
        </>
    );
}

export default settings;