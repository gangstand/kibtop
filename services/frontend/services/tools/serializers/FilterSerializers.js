import { currencyNames } from "./dictionary/CurrencyDict"

export const serializeFilter = filter => {
    if(!filter) return {}

    const cur = filter.currency || '$'

    const serializedFilter = {
        ['sub_category_en']: filter.subCategory,
        ['all_old_new_en']: filter.condition,
        brand: filter.brand,
        mileage__gt: Number(filter.mileage_from)-1,
        mileage__lt: Number(filter.mileage_to)+1,

        year__gt: Number(filter.year_from)-1,
        year__lt: Number(filter.year_to)+1,

        ['number_rooms_en']: filter.rooms,
        ['employment_en']: filter.employment,
        ['for_work_type_en']: filter.workType,
        city: filter.city,

        [`price_${currencyNames[cur]}__gt`]: Number(filter.cost_from)-1,
        [`price_${currencyNames[cur]}__lt`]: Number(filter.cost_to)+1,

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

        if(!!value) query += `${key}=${value}&`
    }

    return query
}