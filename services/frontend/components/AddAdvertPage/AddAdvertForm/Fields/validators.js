export const fileFormValid = (filelist) => {
    if(!filelist || filelist.length === 0) return true
    
    const fileName = filelist[0].name
    const fileFormat = fileName.split('.')[fileName.split('.').length - 1]

    const allowedFormats = ['jpg', 'jpeg', 'png']
    if(!allowedFormats.some(format => format === fileFormat)) return false

    const fileSize = filelist[0].size
    const fileSizeKb = fileSize / 1024
    const fileSizeMb = fileSize / 1024**2

    if(fileSizeKb < 30 || fileSizeMb > 10) return false

    return true
}

export const serializeUploads = files => files.map((src, index) => ({id: index, src}))