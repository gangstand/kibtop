import Header from "../components/Header/Header";
import RegistrationPage from "../components/RegistrationPage/RegistrationPage";
import { AuthApi } from "../services/AuthApi";

const registration = () => {
    return (
        <>
            <Header />
            <RegistrationPage />
        </>
    );
}

export default registration;