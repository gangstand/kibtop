import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/AuthSlice";
import { CurrencyReducer } from "./slices/CurrencySlice";
import {HomePageApi} from '../services/HomePageApi'
import { locationReducer } from "./slices/LocationSlice";
import { LocaleReducer } from "./slices/LocaleSlice";
import { MobileReducer } from "./slices/MobileSlice";

const reducer = {
    auth: authReducer,
    currency: CurrencyReducer,
    location: locationReducer,
    locale: LocaleReducer,
    mobile: MobileReducer,
    [HomePageApi.reducerPath]: HomePageApi.reducer
}

export const store = configureStore({reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(HomePageApi.middleware),})

    // "Promote your product": "Ürününüzü tanıtın",
    // "Increase your ad views": "Reklam görüntülemelerinizi artırın",
    // "Promo slider": "Promosyon kaydırıcısı",
    // "Detailed description of the promotion": "Promosyonun ayrıntılı açıklaması",

        // "Promote your product": "Продвинь свой товар",
    // "Increase your ad views": "Увеличь просмотры своего объявления",
    // "Promo slider": "Баннер акций",
    // "Detailed description of the promotion": "Подробное описание акции",

    
    // "Promote your product": "Promote your product",
    // "Increase your ad views": "Increase your ad views",
    // "Promo slider": "Promo slider",
    // "Detailed description of the promotion": "Detailed description of the promotion",