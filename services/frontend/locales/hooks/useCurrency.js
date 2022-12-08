import { useContext } from "react"
import { CurrencyContext } from "../CurrencyContext"

export const useCurrency = () => {
    const {currency, toggleCurrency} = useContext(CurrencyContext);

    return {currency, toggleCurrency}
}