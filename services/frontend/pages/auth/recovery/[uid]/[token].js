import { useRouter } from "next/router";
import Header from "../../../../components/Header/Header";
import PasswordRecoveryPage from "../../../../components/PasswordRecoveryPage/PasswordRecoveryPage";

const PasswordReset = () => {
    
    return (
        <>
            <Header />
            <PasswordRecoveryPage />
        </>
    );
}

export default PasswordReset;