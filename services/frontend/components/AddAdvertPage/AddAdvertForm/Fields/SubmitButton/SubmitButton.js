import Text from "../../../../Elementes/Text/Text";

const SubmitButton = ({onSubmitClick, isValid}) => {
    return (
        <>
            <button 
                onClick={onSubmitClick}
                disabled={false}
                className="reg-btn reg-btn--add reg-btn--grey"
            >
                <Text content="Publish without promotion" />
            </button>
        </>
    );
}

export default SubmitButton;