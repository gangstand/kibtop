import { useEffect, useState } from "react";
import { createContext } from "react";



export const CurrencyContext = createContext(null);

export const CurrencyProvider = props => {
    const currencies = {
        "$": '$',
        "€": '€',
        "₽": '₽'
    }

    const [currency, setCurrency] = useState('$');
    const toggleCurrency = currency => {
        setCurrency(currency);
        localStorage.setItem('currency', currency)
    }

    useEffect(() => {
        const storgeCurrency = localStorage.getItem('currency') || '$';

        toggleCurrency(storgeCurrency);
    }, [])


    return (
        <CurrencyContext.Provider value={{
                currency: currencies[currency] || '$', 
                toggleCurrency
            }}>
            {props.children}
        </CurrencyContext.Provider>
    );
}
