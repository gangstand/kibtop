import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAdvertThunk, setAddAdvertCategory, setAddAdvertFormStep } from "../../../store/slices/AddAdvertSlice";
import AddAdvertForm from "./AddAdvertForm";



const AddAdvertFormContainer = () => {
    const {formStep, category, newAdvert: {advertId, advertCategory}} = useSelector(state => state.addAdvert)
    const {userId} = useSelector(state => state.auth)
    const {phone} = useSelector(state => state.profile)

    console.log(advertId, advertCategory);

    const {locale, push} = useRouter()
    const dispatch = useDispatch()

    const onAddAdvertSubmit = data => {
        dispatch(addAdvertThunk({...data, userId, phone}, category, locale))
    }

    useEffect(() => {
        if(!!advertId && !!advertCategory) {
            push(`/advert/${advertCategory}/${advertId}`)
        }
    }, [advertId, advertCategory])


    return <AddAdvertForm {...{formStep, onAddAdvertSubmit}} />;
}

export default AddAdvertFormContainer;