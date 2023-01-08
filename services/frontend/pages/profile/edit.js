import { useRouter } from "next/router";
import { useEffect } from "react";
import EditProfilePage from "../../components/EditProfilePage/EditProfilePage";
import { useAuthRedirect } from "../../components/PageHooks/useAuthRedirect";
import { AuthApi } from "../../services/AuthApi";
import { ProfileApi } from "../../services/ProfileApi";
import { getServerSideCookies, getStringCookies } from "../../services/tools/CookieController";
import { getServerSideUser } from "../../services/tools/getServerSideUser/getServerSideUser";

const edit = ({user}) => {
    useAuthRedirect(user)
    
    return (
        <>
            <EditProfilePage {...{user}} />
        </>
    );
}

export async function getServerSideProps({req, res}) {
    
    const cookies = getStringCookies(req)


    const access = getServerSideCookies(cookies, 'access')

    let user = await ProfileApi.getUserData(access)
                    .catch( err => null)

    if(!user) user = await getServerSideUser(cookies)

    
    
    return {
      props: {user},
    }
  }
export default edit;