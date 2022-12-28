import { signIn, useSession } from "next-auth/react";
import RegFacebookButton from "./RegFacebookButton";

const RegFacebookButtonContainer = () => {
    const {data} = useSession()
    
    console.log(data);

    return <RegFacebookButton {...{signIn}} />;
}

export default RegFacebookButtonContainer;