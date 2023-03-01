import React from "react"
import { useSelector } from "react-redux"

const addPropsToReactElement = (element, props) => {
    if (React.isValidElement(element)) {
      return React.cloneElement(element, props)
    }
    return element
  }

const AdvertsPropertyContainer = ({children, serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert
    
    return <>{addPropsToReactElement(children, {...advert})}</> 
}

export default AdvertsPropertyContainer;