import { BASE_URL } from "../../Instance"

const convertDate = (dateVal) => {
    const date = String(new Date(dateVal).toLocaleString())
    const dateString = date.split(', ')[0]
    
    return dateString
}

const serializeAdvertUploads = uploads => uploads.map(({uploads}) => uploads)


export const serializeAdverts = (adverts, lang) => {
    let advertsFull = []
    for (const category in adverts) {
        advertsFull = [...advertsFull, 
            ...adverts[category].map(advert => ({...advert, category: category})
            )]
    }


    advertsFull = advertsFull.map(advert => {
        const date = new Date(advert.created_at).getTime()

        return {...advert,
            created_at: new Date(advert.created_at).getTime()
        }
    })

    advertsFull = advertsFull.sort((advert_new, advert_old) => advert_old.created_at - advert_new.created_at)


    advertsFull = advertsFull.map(advert => ({
        id: advert.id,
        title: advert[`title_${lang}`],
        cost: advert.price,
        address: advert.address,
        img: BASE_URL+advert.upload,
        date: convertDate(advert.created_at),
        category: advert.category
    }))


   return [...advertsFull]
}

export const serializeFullAdvertData = (advert, lang, category) => ({
    category,
    id: advert.id,
    title: advert[`title_${lang}`],
    address: advert.address,
    cost: advert.price,
    img: advert.upload,
    date: convertDate(advert.created_at)
})


export const serializeFavorites = (favorites, category) => favorites
    .map(favorite => ({
        favouriteId: favorite.id, 
        advertId: favorite[`${category}_full`],
        userId: favorite.user,
        category,
    }))

export const serializeAdvertDatails = (advert, lang, category) => {
    return {
        title: advert[`title_${lang}`],
        description: advert[`description_${lang}`],
        categoryName: advert[`category_${lang}`],
        subCategoryName: advert[`sub_category_${lang}`],
        condition: advert[`all_old_new_${lang}`],
        brand: advert.brand,
        mileage: advert.mileage,
        year: advert.year,
        rooms: advert[`number_rooms_${lang}`],
        employment: advert.employment,
        workType: advert[`for_work_type_en`],
        date: convertDate(advert.created_at),
        address: advert.address,
        img: advert.upload,
        uploads: !!(advert[`${category}_full_upload`]?.length) ? serializeAdvertUploads(advert[`${category}_full_upload`]) : [advert.upload, advert.upload ,advert.upload],
        userId: advert.user,
        advertId: advert.id,
        cost: advert.price,
        square: advert.square,
        isMonth: advert.type_sell,
        category
    }
}

export const serializeCategory = (adverts, lang, category) => {
    if(!adverts) return
    return adverts[lang].map(advert => serializeAdvertDatails(advert, lang, category))
}