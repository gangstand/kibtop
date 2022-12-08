import LocationSelectOption from "./LocationSelectOption";

const LocationSelectOptions = ({cities, chooseLocation}) => {
    return (
        <>
            <div className="locatin-select__list">
                {
                    cities?.map(city => <LocationSelectOption {...city} chooseLocation={chooseLocation} key={city.id} />)
                }
            </div>
        </>
    );
}

export default LocationSelectOptions;