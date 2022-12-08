import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { LocationApi } from "../services/LocationApi";

export const LocationContext = createContext(null)

export const LocationProvider = ({children}) => {
    const {locale} = useRouter()
    const [location, setLocation] = useState(null)

    const changeLocation = ({city, cityId}) => {
        localStorage.setItem('location', cityId)
        setLocation(city)
    }

    useEffect(() => {
        const cityId = localStorage.getItem('location')
        if(!!cityId) {
            LocationApi.getCityById(cityId, locale)
                .then(city => {
                    changeLocation(city)
                }, () => null)
        }
    }, [locale])
        
    return (
        <>
            <LocationContext.Provider value={{location, changeLocation}}>
                {children}
            </LocationContext.Provider>
        </>
    );
}