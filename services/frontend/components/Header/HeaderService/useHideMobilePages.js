import { useRouter } from "next/router"

const useHideMobilePages = () => {
    const {pathname} = useRouter()
    
    const excertedPaths = ['settings', 'archive', 'edit']

    const isExcerted = excertedPaths.some(path => pathname.includes(path) )

    const ExceptionStyle = isExcerted ? ' exception' : ''
    
    return ExceptionStyle
}

export default useHideMobilePages;