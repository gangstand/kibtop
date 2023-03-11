import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";
import Text from "../../../../../../Elementes/Text/Text";
import {reset} from "../../../filter.module.scss"


const ResetBtn = ({defaultValues}) => {
    const {getValues, setValue} = useFormContext()
    const {push, pathname, query} = useRouter()
    const onResetClick = () => {
        const fields = Object.keys(getValues())

        fields.forEach(field => setValue(field, ''))

        for (const field in defaultValues) {
            const value = defaultValues[field]

            setValue(field, value)
        }

        const {category, page} = query
        
        if(!!category && !!page) {
            push({pathname, query: {category, page}})
            return
        }
        if(!!category) {
            push({pathname, query: {category}})
            return
        }

        push({pathname, query: {}})
    }
    return (
        <>
            <a className={reset} onClick={onResetClick}>
                <Text content="Reset filter" />
            </a>
        </>
    );
}

export default ResetBtn;