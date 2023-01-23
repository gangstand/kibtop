import { useJsApiLoader } from "@react-google-maps/api"
import { useRouter } from "next/router"
import { createContext, useState } from "react"

export const CoogleMapContext = createContext(null)

const libraries = ['places']

export const CoogleMapProvider = ({children}) => {
    const {locale} = useRouter()

    const [lang] = useState(locale)

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
        libraries,
        language: lang
      })
    
    return (
        <CoogleMapContext.Provider value={{isLoaded}}>
            {children}
        </CoogleMapContext.Provider>
    );
}