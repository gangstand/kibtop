import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./Map";

const center = {
    lat: 35,
    lng: 33
};

const libraries = ['places']

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
}


const MapContainer = () => {
    



    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
        libraries
      })

    return (
        <>
            {
                isLoaded ? <Map {...{center}} /> : <>Loading</>
            }
        </>
    );
}

export default MapContainer;