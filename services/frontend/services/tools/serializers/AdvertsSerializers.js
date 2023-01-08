const convertDate = (dateVal) => {
    const date = String(new Date(dateVal).toUTCString())
    const dateString = date.split(', ')[1].split(' ')
    return `${dateString[0]} ${dateString[1]} ${dateString[2]}`
}



export const serializeAdverts = async (adverts, lang) => {
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
        img: advert.upload,
        date: convertDate(advert.created_at),
        category: advert.category
    }))


   return advertsFull
}

