export const backPath = (pathname) => {
    const backPathList = pathname.split('/')
    backPathList.pop()

    return backPathList.join('/')
}