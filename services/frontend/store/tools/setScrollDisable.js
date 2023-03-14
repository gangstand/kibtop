

export const setScrollDisable = isDisable => {

    if(isDisable) {
        document.querySelector('body').style.overflow = 'hidden'
        document.querySelector('html').style.overflow = 'hidden'

        document.querySelector('html').style.touchAction = 'none'
        document.querySelector('body').style.touchAction = 'none'

    } else {
        document.querySelector('body').style.overflow = 'visible'
        document.querySelector('html').style.overflow = 'visible'

        document.querySelector('html').style.touchAction = 'auto'
        document.querySelector('body').style.touchAction = 'auto'
    }
}