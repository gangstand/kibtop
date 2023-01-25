import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import PhotoUploads from "./PhotoUploads";

const PhotoUploadsContainer = () => {
    const {watch} = useFormContext()
    const {photos} = watch()

    const [uploads, setUploads] = useState([])

    useEffect(() => {
    
        setUploads([])

        photos?.map(img => {
            const fileReader = new FileReader()
            fileReader.onload = (e) => {
                const src = e.currentTarget.result
                setUploads(uploads => {
                    return [
                        ...uploads, src
                    ]
                })
            }
            fileReader.readAsDataURL(img)
        })
        
        
    }, [photos])

    const deleteUpload = (index) => {
        setUploads(uploads => uploads.filter((upload, uploadIndex) => uploadIndex !== index))
    }

    return <PhotoUploads {...{uploads, deleteUpload}} />;
}

export default PhotoUploadsContainer;