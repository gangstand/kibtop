export const serializeFilter = filter => {
    if(!filter) return {}
    const serializedFilter = {
        ['sub_category_en']: filter.subCategory,
        ['all_old_new_en']: filter.condition,
        brand: filter.brand,
        mileage__lt: filter.mileage_from,
        mileage__gt: filter.mileage_to,

        year__lt: filter.year_from,
        year__gt: filter.year_to,

        ['number_rooms_en']: filter.rooms,
        ['employment_en']: filter.employment,
        ['for_work_type_en']: filter.workType,
        city: filter.city,

        price__lt: filter.cost_from,
        price__gt: filter.cost_to,
        currency: filter.currency,
        square: filter.square,
        type_sell: filter.isMonth,

        sorting: filter.sorting
    }

    return removeEmptyFields(serializedFilter)
}

export const removeEmptyFields = data => {
    const fillData = {}

    for (const key in data) {
        const value = data[key]


        if (!!value) fillData[`${key}`] = value
    }

    return fillData
}

export const createQueryParams = data => {
    let query = ''

    for (const key in data) {
        const value = data[key]

        query += `${key}=${value}&`
    }

    return query
}