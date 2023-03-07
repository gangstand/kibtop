import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"

export const useSwipe = ({onClose, dist=30, side='bottom', isVertical=true, alt=false, transition=500, workingWidth=600}) => {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    
    const minSwipeDistance = dist
    const swipeDirection = isVertical ? 'clientY' : 'clientX'
    const swipeElem = useRef(null)

    const onTouchStart = (e) => {
        e.preventDefault()
        e.stopPropagation()

        setTouchEnd(null) 
        setTouchStart(e.targetTouches[0][swipeDirection])
    }
    const onTouchMove = (e) => {
        e.preventDefault()
        e.stopPropagation()

        setTouchEnd(e.targetTouches[0][swipeDirection])
    }

    const onTouchEnd = (e) => {
        // e.preventDefault()
        // e.stopPropagation()

        if (!touchStart || !touchEnd) return
  
        const distance = touchEnd - touchStart
        const isSwipe = !alt ? distance > minSwipeDistance : distance < minSwipeDistance
        if(isSwipe && window.innerWidth < workingWidth) {
            swipeElem.current.style[side] = '-100%'
  
            setTimeout(onClose, transition)
        }
    }

    useEffect(() => {
        if(swipeElem.current && window.innerWidth < workingWidth) {
            swipeElem.current.style[side] = '0'
            swipeElem.current.style.transition = `${side} ${transition}ms`
        }
    }, [swipeElem.current])

    const handleClose = () => {
        swipeElem.current.style[side] = '-100%'
        setTimeout(onClose, transition)
    }

    return {
        swipe: {ref: swipeElem, onTouchStart, onTouchMove, onTouchEnd},
        handleClose 
    }

}