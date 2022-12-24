import Text from "../../../../../Elementes/Text/Text";

const Confirm = () => {
    return (
        <>
           <article className="greeting greeting--confirm">
                <h2 className="reg-title"><Text content="Create new account" /></h2>

                <div className="greeting__desc">
                    <div className="greeting__content">
                        <h3 className="greeting__title"><Text content="Almost ready" /></h3>
                        <p className="greeting__text">
                            <Text 
                                content="We have sent an email to your email address" 
                            />
                            {" "}
                            <Text 
                                content="Please check this and confirm your email address" 
                            />
                        </p>
                    </div>
                </div>
                        
                <button className="reg-btn"><Text content="Resend" /></button>
            </article>
        </>
    );
}

export default Confirm;