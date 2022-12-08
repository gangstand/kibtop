import { useDispatch, useSelector } from "react-redux";
import useLocation from "../../../../../../locales/hooks/useLocation";
import { changeLocation, changeLocationState, setLocationOpen } from "../../../../../../store/slices/LocationSlice";
import LocationSelectOptions from "./LocationSelectOptions";

const LocationSelectOptionsContainer = () => {
    const {cities, locationFieldValue} = useSelector(state => state.location)
    const dispatch = useDispatch()

    const filteredCities = cities.filter(({city}, index) => (city.toLowerCase()
                                                            .includes(locationFieldValue.toLowerCase())
                                                            )).slice(0, 3)

    const chooseLocation = (city, cityId) => {
        dispatch(changeLocationState({city, cityId}))
    }

    return <LocationSelectOptions cities={filteredCities} chooseLocation={chooseLocation} />;
}

export default LocationSelectOptionsContainer;