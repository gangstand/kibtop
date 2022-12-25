import LoginDecoration from "./LoginDecoration/LoginDecoration";
import LoginFormContainer from "./LoginForm/LoginFormContainer";

const LoginPage = () => {
    return (
        <>
            <section className="section section--reg">
                <div className="container container--reg">
                    <LoginFormContainer />
                    
                    <LoginDecoration />
                </div>
            </section>
        </>
    );
}

export default LoginPage;