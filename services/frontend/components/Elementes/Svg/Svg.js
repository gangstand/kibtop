import Image from "next/image";

const Svg = ({symbol, className}) => {
    return (
        <>
            <svg className={className}>
                <use xlinkHref={`/icons/spirte.svg#${symbol}`}></use>
            </svg>
            {/* <img src="/icons/logo.svg" width={12} height={12} alt="Лого" /> */}
        </>
    );
}

export default Svg;