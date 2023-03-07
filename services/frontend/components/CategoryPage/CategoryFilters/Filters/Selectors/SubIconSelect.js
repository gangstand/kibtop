import { useFormContext } from "react-hook-form";
import Text from "../../../../Elementes/Text/Text";
import {wrapper, subIcon, types, typesBtn, iconImg} from "../IconsCategoriesFilter/icon_filter.module.scss"



const SubIconSelect = ({icons, typeText, nextStep}) => {
    const {setValue} = useFormContext()

    const onChooseIcon = value => {
        setValue('subCategory', value)
        nextStep()
    }
    return (
        <>
            <div className={wrapper}>

                {
                    icons?.map(({value, text, backgroundColor, color, img, classStyle}, index) => (
                        <a  key={index}
                            className={`${subIcon} ${classStyle}`} 
                            style={{backgroundColor, color, gridArea: `icon${index+1}`}} 
                            onClick={() => onChooseIcon(value)}>
                            <p>
                                <Text content={text} />
                            </p>
                            

                            <img src={`/img/filter/${img}.png`} alt="" className={iconImg} />
                        </a>
                    ))
                }

                <div className={types} style={{gridArea: 'icon5'}}>
                    <a className={typesBtn} onClick={nextStep}>
                        <Text content={typeText} />
                    </a>
                </div>
            </div>
        </>
    );
}

export default SubIconSelect;