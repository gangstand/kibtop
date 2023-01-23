import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useCurrency } from "../../../../../../../locales/hooks/useCurrency";
import Text from "../../../../../../Elementes/Text/Text";
import AddressField from "../../../../Fields/AddressField/AddressField";
import AddressFieldContainer from "../../../../Fields/AddressField/AddressFieldContainer";
import CostField from "../../../../Fields/CostField";
import DescriptionInput from "../../../../Fields/DescriptionInput";
import PhotosInput from "../../../../Fields/PhotosInput";
import PhotoUploadsContainer from "../../../../Fields/PhotoUploads/PhotoUploadsContainer";
import RadioGroup from "../../../../Fields/RadioGroup/RadioGroup";
import ServiceSets from "../../../../Fields/ServiceSets/ServiceSets";
import ServiceSetsGroupContainer from "../../../../Fields/ServiceSetsGroup/ServiceSetsGroupContainer";
import SubmitButtonContainer from "../../../../Fields/SubmitButton/SubmitButtonContainer";

const AddRealty = () => {
    const {setValue} = useFormContext()
    const {currency} = useCurrency()

    useEffect(() => {
        setValue('isMonth', 'true')
        setValue('condition', 'Old')
        setValue('rooms', 'Studio')
        setValue('currency', currency)
    }, [])
    return (
        <>
            <div className="advert-form__field">
                <label className="advert-form__label">
                    <Text content="transaction type" />
                </label>

                <RadioGroup name={'isMonth'} inputs={[
                    {label: 'Rent out', value: true},
                    {label: 'Sell', value: false},

                ]} />
            </div>


            <div className="advert-form__field">
                <label className="advert-form__label">
                    <Text content="condition" />
                </label>

                <RadioGroup name={'condition'} inputs={[
                    {label: 'Old', value: 'Old'},
                    {label: 'New', value: 'New'},

                ]} />
            </div>

            <div className="advert-form__field">
                <label className="advert-form__label">
                    <Text content="rooms" />
                </label>

                <RadioGroup name={'rooms'} inputs={[
                    {label: 'Studio', value: 'Studio'},
                    {label: '1+1', value: '1+1'},
                    {label: '2+1', value: '2+1'},
                    {label: '2+2', value: '2+2'},
                    {label: '3+1', value: '3+1'},
                    {label: '4+1 and more', value: '4+1 and more'},
                ]} />
            </div>

            <div className="advert-form__field">
                <label className="advert-form__label">
                    <Text content="price" />
                </label>

                <CostField />
            </div>

            <div className="advert-form__field">
                <label className="advert-form__label">
                    <Text content="address" />
                </label>

                <AddressFieldContainer />
            </div>

            <div className="advert-form__field">
                <label className="advert-form__label">
                    <Text content="photo" />
                </label>

                <div className="advert-form__files">
                    <PhotoUploadsContainer />
                    <PhotosInput />
                </div>
            </div>

            <div className="advert-form__field advert-form__field--mt">
                <label className="advert-form__label">
                    <Text content="description" />
                </label>

                <div className="advert-form__files">
                    <DescriptionInput placeholderName="apartment" />
                </div>
            </div>

            <h4 className="title promote-title">
                <Text content="Promote your products" />
            </h4>

            <div className="advert-form__field advert-form__field--mt">
                <label className="advert-form__label">
                    <Text content="Service sets" />
                </label>

                <ServiceSets />
            </div>

            <div className="advert-form__field advert-form__field--mt">
                <label className="advert-form__label">
                    <Text content="Service sets" />
                </label>

                <ServiceSetsGroupContainer />
            </div>



            <SubmitButtonContainer />
        </>
    );
}

export default AddRealty;