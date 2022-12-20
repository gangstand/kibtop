import { useSelector } from "react-redux";
import RegDecoration from "./RegDecoration";

const RegDecorationContainer = () => {
    const {deskStep} = useSelector(state => state.registration)

    return <RegDecoration {...{deskStep}} />;
}

export default RegDecorationContainer;