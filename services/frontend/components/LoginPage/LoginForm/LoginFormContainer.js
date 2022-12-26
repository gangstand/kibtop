import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../../store/slices/AuthSlice";
import LoginForm from "./LoginForm";

const LoginFormContainer = () => {
    const dispatch = useDispatch()
    const {isLoading, error} = useSelector(state => state.login)

    const seriealizeErrors = (errors) => ({
        name: Object.keys(errors)[0],
        message: errors[Object.keys(errors)[0]]?.message
    })

    const onLoginSubmit = data => {
        const {email, password1} = data

        dispatch(loginThunk(email, password1))
    }

    return <LoginForm {...{seriealizeErrors, onLoginSubmit, isLoading, error}} />;
}

export default LoginFormContainer;