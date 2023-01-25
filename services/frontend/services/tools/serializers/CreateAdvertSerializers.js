export const serializeCreateAdvertData = (data, category, lang) => {


    const newAdvertData = {
        [`title_${lang}`]: 'title',
        [`description_${lang}`]: data.description,
        [`category_${lang}`]: data.categoryName,
        [`sub_category_${lang}`]: data.subCategory,
        [`all_old_new_${lang}`]: data.condition,
        brand: data.brand,
        mileage: data.mileage,
        year: data.year,
        [`number_rooms_${lang}`]: data.rooms,
        employment: data.employment,
        [`for_work_type_en`]: data.workType,
        address: data.address,
        city: data.city,
        geocode: data.geocode,
        upload: data.photos[0],
        [`${category}_full_upload`]: data.photos,
        user: data.userId,
        price: data.cost,
        currency: data.currency,
        square: data.square,
        type_sell: data.isMonth,
    }

    const formData = new FormData()

    for (const key in newAdvertData) {
        if(!!newAdvertData[key]) formData.append(key, newAdvertData[key])
    }

    return formData
}

