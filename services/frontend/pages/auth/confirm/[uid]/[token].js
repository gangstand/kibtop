import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Text from "../../../../components/Elementes/Text/Text";
import Header from "../../../../components/Header/Header";
import Access from "../../../../components/RegistrationPage/RegSteps/DesktopRegRouter/DeskGreeting/Access/Access";
import RegDecoration from "../../../../components/RegistrationPage/RegSteps/RegDecoration/RegDecoration";
import { activateEmailThunk } from "../../../../store/slices/RecoverySlice";

const EmailConfirm = () => {
    const dispatch = useDispatch()
    const {query: {uid, token}, pathname, query, asPath, push} = useRouter()

    useEffect(() => {
        dispatch(activateEmailThunk({uid, token}))
        
        push({
            pathname, query
        }, asPath, {locale: localStorage.getItem('i18nextLng') || 'en'})
    }, [])

    return (
        <>
            <Header/>
            <section className="section section--reg">
                <div className="container container--reg">
                    <Access />


                    <RegDecoration isConfirmed={true} />
                </div>
            </section>
        </>
    );
}

export default EmailConfirm;