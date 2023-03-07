import disableScroll from 'disable-scroll';


export const setScrollDisable = isDisable => {

    if(isDisable) {
        document.querySelector('body').style.overflow = 'none'
    } else {
        document.querySelector('body').style.overflow = 'none'
    }
}