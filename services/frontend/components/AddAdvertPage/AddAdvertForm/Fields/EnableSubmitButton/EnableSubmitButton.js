import Text from "../../../../Elementes/Text/Text";

const EnableSubmitButton = ({onSubmitClick, isValid, isPhoneNull, openAddPhoneModal}) => {
    return (
        <>
            {
                isPhoneNull ? <>
                    <button disabled={false} onClick={openAddPhoneModal} className="reg-btn reg-btn--max-content">
                        <Text content="Enable" />
                    </button>
                </> : <>
                    <button disabled={!isValid} onClick={onSubmitClick} className="reg-btn reg-btn--max-content">
                        <Text content="Enable" />
                    </button>
                </>
            }
            
        </>
    );
}

export default EnableSubmitButton;