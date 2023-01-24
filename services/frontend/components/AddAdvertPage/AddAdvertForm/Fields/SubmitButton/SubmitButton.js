import Text from "../../../../Elementes/Text/Text";

const SubmitButton = ({onSubmitClick, isValid, isPhoneNull, openAddPhoneModal}) => {
    return (
        <>
            {
                isPhoneNull ? <>
                    <button disabled={!isValid} onClick={openAddPhoneModal} className="reg-btn reg-btn--add reg-btn--grey">
                        <Text content="Publish without promotion" />
                    </button>
                </> : <>
                    <button 
                        onClick={onSubmitClick}
                        disabled={!isValid}
                        className="reg-btn reg-btn--add reg-btn--grey"
                    >
                        <Text content="Publish without promotion" />
                    </button>
                </>
            }
        </>
    );
}

export default SubmitButton;