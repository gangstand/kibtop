import { useQuery } from "@tanstack/react-query";
import { FilterApi } from "../../../../../../../services/FilterApi";
import LocationInput from "./LocationInput";

const LocationInputContainer = ({onSwitchOpen, isOpen}) => {
    const {data} = useQuery(['locationsFilters'], FilterApi.getFilterLocations)
    return <>
        {isOpen && <LocationInput {...{onSwitchOpen, options: data}} />}
    </>;
}

export default LocationInputContainer;