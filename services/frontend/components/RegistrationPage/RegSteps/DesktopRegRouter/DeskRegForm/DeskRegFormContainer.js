import { useSelector } from "react-redux";
import DeskRegForm from "./DeskRegForm";

const DeskRegFormContainer = () => {
    const {deskStep} = useSelector(state => state.registration)

    return <DeskRegForm {...{deskStep}} />;
}

export default DeskRegFormContainer;