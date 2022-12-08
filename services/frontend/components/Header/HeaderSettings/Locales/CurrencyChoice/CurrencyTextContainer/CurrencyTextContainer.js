import { useCurrency } from "../../../../../../locales/hooks/useCurrency";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import CurrencyText from "./CurrencyText";

const CurrencyTextContainer = () => {
    const {t} = useLanguage();
    const currencies = {
        "€": t('Euro'),
        "$": t('Dollar'),
        "₽": t('Ruble')
    }

    const {currency} = useCurrency();

    return <CurrencyText text={currencies[currency]} />
}

export default CurrencyTextContainer;