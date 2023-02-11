import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearchAdvertsThunk, setSearchOpen } from "../../../../../../store/slices/SearchSlice";
import SearchProductsForm from "./SearchProductsForm";

const SearchProductsFormContainer = () => {
    const [isDisabled, setDisabled] = useState(false)
    const searchInput = useRef()
    const {locale} = useRouter()
    const dispatch = useDispatch()

    const onSearchProductSubmit = product => {
        setDisabled(true)
        setTimeout(() => {
            dispatch(setSearchAdvertsThunk(searchInput.current.value, locale, () => setDisabled(false)))
        }, 400)
        
    }

    const onChange = e => {
        const value = e.currentTarget.value
        
        if(!value) {
            dispatch(setSearchOpen(false))
            
        } else {
            dispatch(setSearchOpen(true))
        }

        if(!isDisabled) onSearchProductSubmit()
    }
    
    return <SearchProductsForm {...{onSearchProductSubmit, searchInput, onChange}} />;
}

export default SearchProductsFormContainer;