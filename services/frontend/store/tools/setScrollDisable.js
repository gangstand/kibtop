import disableScroll from 'disable-scroll';


export const setScrollDisable = isDisable => {

    if(isDisable) {
        disableScroll.on()
    } else {
        disableScroll.off()
    }
}