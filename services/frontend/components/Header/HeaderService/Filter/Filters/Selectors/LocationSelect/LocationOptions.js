import { useFormContext } from "react-hook-form";

const LocationOptions = ({options, onChange, value}) => {
    const {setValue} = useFormContext()
    const setLocationValue = value => {
        onChange(value)
        setValue('city', value)
    }

    return (
        <>
            <div className="locatin-select__list">
                {
                    options?.filter(city => city.toLowerCase().includes(value.toLowerCase())).map(city => (
                        <button className="locatin-select__option" onClick={() => setLocationValue(city)}>
                            {city}
                        </button>
                    ))
                }
            </div>

            <div className="locatin-select__list locatin-select__list--mobile">
                {
                    options?.filter(city => city.toLowerCase().includes(value.toLowerCase())).map(city => (
                        <button className="locatin-select__option" onClick={() => setLocationValue(city)}>
                            {city}
                        </button>
                    ))
                }
            </div>
        </>
    );
}

export default LocationOptions;