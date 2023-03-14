import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setAddAdvertCategory, setAddAdvertFormStep } from "../../../../../store/slices/AddAdvertSlice";
import Text from "../../../../Elementes/Text/Text";
import CategoryNameInput from "../../Fields/CategoryNameInput";
import DeskCategoryInput from "../../Fields/DeskCategoryInput";
import Image from "next/image"

const AddAdvertStep1 = () => {
    const {formStep} = useSelector(state => state.addAdvert)
    const dispatch = useDispatch()


    return (
        <>
            <div className="container container--width container--margin">
                <h1 className="title title--flex title--mobile-add">
                    <Link href={'/'} className="settings-nav__back--mob">
                        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.916664 10.3224L4.94792 6.24953C5.04475 6.1519 5.15996 6.0744 5.2869 6.02152C5.41384 5.96863 5.54999 5.94141 5.6875 5.94141C5.82501 5.94141 5.96116 5.96863 6.0881 6.02152C6.21503 6.0744 6.33025 6.1519 6.42708 6.24953C6.62109 6.4447 6.72999 6.70871 6.72999 6.9839C6.72999 7.2591 6.62109 7.52311 6.42708 7.71828L2.71875 11.4579L23.9583 11.4579C24.2346 11.4579 24.4996 11.5676 24.6949 11.763C24.8903 11.9583 25 12.2233 25 12.4995V12.4995C25 12.7758 24.8903 13.0407 24.6949 13.2361C24.4996 13.4314 24.2346 13.5412 23.9583 13.5412L2.65625 13.5412L6.42708 17.3016C6.52472 17.3985 6.60221 17.5137 6.65509 17.6406C6.70798 17.7675 6.7352 17.9037 6.7352 18.0412C6.7352 18.1787 6.70798 18.3149 6.65509 18.4418C6.60221 18.5687 6.52472 18.6839 6.42708 18.7808C6.33025 18.8784 6.21503 18.9559 6.0881 19.0088C5.96116 19.0617 5.82501 19.0889 5.6875 19.0889C5.54999 19.0889 5.41384 19.0617 5.2869 19.0088C5.15996 18.9559 5.04475 18.8784 4.94792 18.7808L0.916664 14.7391C0.331453 14.1532 0.00274849 13.3589 0.00274849 12.5308C0.00274849 11.7027 0.331453 10.9084 0.916664 10.3224Z" fill="#414042"/>
                        </svg>
                    </Link>

                    <Text content="Add advert" />
                </h1>

                <Link href="/" className="profile-link">
                    <svg height="25px" width="25px" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.75 5H21.875C21.5849 3.58927 20.8173 2.32168 19.7016 1.4109C18.5859 0.500113 17.1903 0.00181816 15.75 0L13.25 0C11.8097 0.00181816 10.4141 0.500113 9.29844 1.4109C8.18273 2.32168 7.41512 3.58927 7.125 5H3.25C2.91848 5 2.60054 5.1317 2.36612 5.36612C2.1317 5.60054 2 5.91848 2 6.25C2 6.58152 2.1317 6.89946 2.36612 7.13388C2.60054 7.3683 2.91848 7.5 3.25 7.5H4.5V23.75C4.50198 25.407 5.1611 26.9956 6.33278 28.1672C7.50445 29.3389 9.09301 29.998 10.75 30H18.25C19.907 29.998 21.4956 29.3389 22.6672 28.1672C23.8389 26.9956 24.498 25.407 24.5 23.75V7.5H25.75C26.0815 7.5 26.3995 7.3683 26.6339 7.13388C26.8683 6.89946 27 6.58152 27 6.25C27 5.91848 26.8683 5.60054 26.6339 5.36612C26.3995 5.1317 26.0815 5 25.75 5ZM13.25 2.5H15.75C16.5253 2.50095 17.2814 2.74172 17.9145 3.1893C18.5476 3.63689 19.0268 4.26936 19.2863 5H9.71375C9.97323 4.26936 10.4524 3.63689 11.0855 3.1893C11.7186 2.74172 12.4747 2.50095 13.25 2.5ZM22 23.75C22 24.7446 21.6049 25.6984 20.9017 26.4017C20.1984 27.1049 19.2446 27.5 18.25 27.5H10.75C9.75544 27.5 8.80161 27.1049 8.09835 26.4017C7.39509 25.6984 7 24.7446 7 23.75V7.5H22V23.75Z" fill="#414042"/>
                        <path d="M12.5 22C12.8978 22 13.2794 21.8683 13.5607 21.6339C13.842 21.3995 14 21.0815 14 20.75V13.25C14 12.9185 13.842 12.6005 13.5607 12.3661C13.2794 12.1317 12.8978 12 12.5 12C12.1022 12 11.7206 12.1317 11.4393 12.3661C11.158 12.6005 11 12.9185 11 13.25V20.75C11 21.0815 11.158 21.3995 11.4393 21.6339C11.7206 21.8683 12.1022 22 12.5 22Z" fill="#414042"/>
                        <path d="M17.5 22C17.8978 22 18.2794 21.8683 18.5607 21.6339C18.842 21.3995 19 21.0815 19 20.75V13.25C19 12.9185 18.842 12.6005 18.5607 12.3661C18.2794 12.1317 17.8978 12 17.5 12C17.1022 12 16.7206 12.1317 16.4393 12.3661C16.158 12.6005 16 12.9185 16 13.25V20.75C16 21.0815 16.158 21.3995 16.4393 21.6339C16.7206 21.8683 17.1022 22 17.5 22Z" fill="#414042"/>
                    </svg>

                    <Text content="Go back to the main page" />
                </Link>

                
            </div>


            <div className="categories-choice categories-choice--desk">
                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/realty.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Real estate" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: 'Apartment', value: 'Apartments', categoryName: 'Real estate', category: 'realty'}} />
                        <DeskCategoryInput {...{text: 'House', value: 'House', categoryName: 'Real estate', category: 'realty'}} />
                        <DeskCategoryInput {...{text: 'land', value: 'Land', categoryName: 'Real estate', category: 'realty'}} />
                        <DeskCategoryInput {...{text: 'Other', value: 'Other', categoryName: 'Real estate', category: 'realty'}} />
                    </div>
                </div>


                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/avto.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Auto" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: 'Cars', value: 'Car', categoryName: 'Auto', category: 'avto'}} />
                        <DeskCategoryInput {...{text: 'Other technique', value: 'Other equipment', categoryName: 'Auto', category: 'avto'}} />
                    </div>
                </div>

                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/work.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Job" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: 'Retail/sales/purchasing', value: 'Retail | Sales | Procurement', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Logistics / Warehouse / Delivery', value: 'Logistics | Warehouse | Delivery', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Construction / finishing works', value: 'Construction | finishing works', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Administrative staff / HR / Secretariat', value: 'Administrative staff | HR | Secretariat', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Security/security', value: 'Security | security', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Cleaning / Home staff', value: 'Cleaning | Home staff', categoryName: 'Job', category: 'work'}} />

                        <DeskCategoryInput {...{text: 'Beauty / Fitness / Sports', value: 'Beauty | Fitness | Sports', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Education/translation', value: 'Education | translation', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Culture / Arts / Entertainment', value: 'Culture | Arts | Entertainment', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Medicine / Pharmacy', value: 'Medicine | Pharmacy', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'IT / computers', value: 'IT | computers', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Banking /  Finance / Insurance / Jurisprudence', value: 'Banking | Finance | Insurance | Jurisprudence', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Real estate', value: 'Real estate', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Advertising / Design / PR', value: 'Advertising | Design | PR', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Production / Working specialties', value: 'Production | Working specialties', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Work abroad', value: 'Work abroad', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Accounting', value: 'Accounting', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Hotel and restaurant business / Tourism', value: 'Hotel and restaurant business | Tourism', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Service stations / Car washes', value: 'Service stations | Car washes', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Part-time employment', value: 'Part-time employment', categoryName: 'Job', category: 'work'}} />
                        <DeskCategoryInput {...{text: 'Other occupations', value: 'Other occupations', categoryName: 'Job', category: 'work'}} />
                    </div>
                </div>

                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/services.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Services" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: 'Cleaning', value: 'Cleaning', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Business', value: 'Business', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Domestic services', value: 'Domestic services', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Beauty / Health', value: 'Beauty | Health', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Education', value: 'Education', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Transport', value: 'Transport', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Construction / Repair', value: 'Construction | Repair', categoryName: 'Services', category: 'services'}} />
                        <DeskCategoryInput {...{text: 'Other', value: 'Other', categoryName: 'Services', category: 'services'}} />
                    </div>
                </div>


                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/children.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="For kids" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: "Children's clothing", value: 'Baby clothing', categoryName: 'For kids', category: 'children'}} />
                        <DeskCategoryInput {...{text: "Children's shoes", value: "Baby shoes", categoryName: 'For kids', category: 'children'}} />
                        <DeskCategoryInput {...{text: "Baby strollers / Transport", value: "Baby stroller", categoryName: 'For kids', category: 'children'}} />
                        <DeskCategoryInput {...{text: "Children's toys / Furniture", value: "Baby toys | Furniture", categoryName: 'For kids', category: 'children'}} />
                        <DeskCategoryInput {...{text: "Other goods for children", value: "Other baby products", categoryName: 'For kids', category: 'children'}} />
                    </div>
                </div>

                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/electronics.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Electronics" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: "Phones and accessories", value: "Phones | Accessories", categoryName: 'Electronics', category: 'electronics'}} />
                        <DeskCategoryInput {...{text: "Computers / Tablets / Games", value: "Computers | Games", categoryName: 'Electronics', category: 'electronics'}} />
                        <DeskCategoryInput {...{text: "TV / Photo / Video / Audio", value: "Video | Audio | TV | Photo", categoryName: 'Electronics', category: 'electronics'}} />
                        <DeskCategoryInput {...{text: "Other technique", value: "Other equipment", categoryName: 'Electronics', category: 'electronics'}} />
                    </div>
                </div>

                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/fashion.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Fashion and style" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: "Women's clothing", value: "Women's clothing", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <DeskCategoryInput {...{text: "Women's shoes", value: "Women's shoes", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <DeskCategoryInput {...{text: "Children's clothes", value: "Children's clothes", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <DeskCategoryInput {...{text: "Men's clothing", value: "Men's clothing", categoryName: 'Fashion and style', category: 'fashion'}} />
                        <DeskCategoryInput {...{text: "Accessories", value: "Accessories", categoryName: 'Fashion and style', category: 'fashion'}} />
                    </div>
                </div>

                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/house_garden.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="House and garden" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: "Furniture", value: "Furniture", categoryName: 'House and garden', category: 'house_garden'}} />
                        <DeskCategoryInput {...{text: "Food / Drinks", value: "Food | Drinks", categoryName: 'House and garden', category: 'house_garden'}} />
                        <DeskCategoryInput {...{text: "Garden", value: "Garden", categoryName: 'House and garden', category: 'house_garden'}} />
                        <DeskCategoryInput {...{text: "Interior items", value: "Interior items", categoryName: 'House and garden', category: 'house_garden'}} />
                        <DeskCategoryInput {...{text: "Construction / Renovation", value: "Construction | Renovation", categoryName: 'House and garden', category: 'house_garden'}} />
                        <DeskCategoryInput {...{text: "Other household goods", value: "Other household goods", categoryName: 'House and garden', category: 'house_garden'}} />

                    </div>
                </div>

                <div className="category-wrapper">
                    <div className="category-line">
                        <img width={100} height={100} alt={''} src="/img/add_advert/free.png" className="advert-form__icon" />

                        <label className="category-title">
                            <Text content="Free" />
                        </label>
                    </div>

                    <div className="category-line">
                        <DeskCategoryInput {...{text: "Free", value: "Free", categoryName: 'Free', category: 'free'}} />
                    </div>
                </div>
            </div>
            
            <div className="categories-choice categories-choice--mob">
                <CategoryNameInput {...{value: 'Real estate', text: 'Real estate', category: 'realty'}} />
                <CategoryNameInput {...{value: 'Auto', text: 'Auto', category: 'avto'}} />
                <CategoryNameInput {...{value: 'Job', text: 'Job', category: 'work'}} />
                <CategoryNameInput {...{value: 'Services', text: 'Services', category: 'services'}} />
                <CategoryNameInput {...{value: 'For kids', text: 'For kids', category: 'children'}} />
                <CategoryNameInput {...{value: 'Electronics', text: 'Electronics', category: 'electronics'}} />
                <CategoryNameInput {...{value: 'Fashion and style', text: 'Fashion and style', category: 'fashion'}} />
                <CategoryNameInput {...{value: 'House and garden', text: 'House and garden', category: 'house_garden'}} />
                <CategoryNameInput {...{value: 'Free', text: 'Free', category: 'free'}} />
            </div>
        </>
    );
}

export default AddAdvertStep1;