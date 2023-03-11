import disableScroll from 'disable-scroll';


export const setScrollDisable = isDisable => {

    if(isDisable) {
        document.querySelector('body').style.overflow = 'hidden'
        document.querySelector('html').style.overflow = 'hidden'
    } else {
        document.querySelector('body').style.overflow = 'visible'
        document.querySelector('html').style.overflow = 'visible'
    }
}