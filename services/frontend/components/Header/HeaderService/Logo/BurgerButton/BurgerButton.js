const BurgerButton = ({openBurgerUserMenu}) => {
    return (
        <>
            <button onClick={openBurgerUserMenu} className="burger-btn">
                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.125 9.125H1.875C0.839473 9.125 0 9.96447 0 11C0 12.0355 0.839473 12.875 1.875 12.875H28.125C29.1605 12.875 30 12.0355 30 11C30 9.96447 29.1605 9.125 28.125 9.125Z" fill="#414042"/>
                    <path d="M1.875 4.12503H28.125C29.1605 4.12503 30 3.28556 30 2.25003C30 1.2145 29.1605 0.375031 28.125 0.375031H1.875C0.839473 0.375031 0 1.2145 0 2.25003C0 3.28556 0.839473 4.12503 1.875 4.12503Z" fill="#414042"/>
                    <path d="M28.125 17.875H1.875C0.839473 17.875 0 18.7145 0 19.75C0 20.7855 0.839473 21.625 1.875 21.625H28.125C29.1605 21.625 30 20.7855 30 19.75C30 18.7145 29.1605 17.875 28.125 17.875Z" fill="#414042"/>
                </svg>
            </button>
        </>
    );
}

export default BurgerButton;