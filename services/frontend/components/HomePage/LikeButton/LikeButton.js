const LikeButton = ({isAuthed, openFavoritesWarning, className, userFavorite, onDislikeClick, onLikeClick, isLoading}) => {
    const onClick = !!userFavorite ? onDislikeClick : onLikeClick 
    return (
        <>
            {
                !!isAuthed ? <>
                    <button disabled={isLoading} className={className || 'advert__btn'} {...{onClick}}>
                        {
                            !!userFavorite ? <>
                                <svg className={"like-icon"} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.2345 0.200195C14.2653 0.215638 13.3171 0.492785 12.4859 1.00365C11.6547 1.51451 10.9698 2.241 10.5003 3.10975C10.0309 2.241 9.34598 1.51451 8.51475 1.00365C7.68351 0.492785 6.73539 0.215638 5.76612 0.200195C4.221 0.268958 2.76525 0.961311 1.7169 2.126C0.66856 3.29068 0.112842 4.83302 0.171159 6.41606C0.171159 10.4251 4.29078 14.8035 7.74588 17.7721C8.51731 18.4362 9.49268 18.8002 10.5003 18.8002C11.508 18.8002 12.4833 18.4362 13.2548 17.7721C16.7099 14.8035 20.8295 10.4251 20.8295 6.41606C20.8878 4.83302 20.3321 3.29068 19.2837 2.126C18.2354 0.961311 16.7796 0.268958 15.2345 0.200195Z" fill="#EE3D48"/>
                                </svg>
                            </> : (
                                <svg className={"like-icon"} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.234 0.200012C14.2648 0.215455 13.3167 0.492601 12.4854 1.00346C11.6542 1.51433 10.9693 2.24082 10.4998 3.10956C10.0304 2.24082 9.3455 1.51433 8.51426 1.00346C7.68302 0.492601 6.7349 0.215455 5.76564 0.200012C4.22051 0.268775 2.76476 0.961128 1.71642 2.12581C0.668072 3.2905 0.112354 4.83284 0.170671 6.41587C0.170671 10.4249 4.29029 14.8033 7.74539 17.7719C8.51682 18.436 9.49219 18.8 10.4998 18.8C11.5075 18.8 12.4828 18.436 13.2543 17.7719C16.7094 14.8033 20.829 10.4249 20.829 6.41587C20.8873 4.83284 20.3316 3.2905 19.2833 2.12581C18.2349 0.961128 16.7792 0.268775 15.234 0.200012ZM12.1482 16.423C11.6868 16.8209 11.103 17.0392 10.4998 17.0392C9.89665 17.0392 9.31286 16.8209 8.85147 16.423C4.42887 12.622 1.8922 8.9754 1.8922 6.41587C1.83336 5.3003 2.20755 4.20614 2.93317 3.37204C3.6588 2.53794 4.67697 2.03158 5.76564 1.96338C6.8543 2.03158 7.87248 2.53794 8.5981 3.37204C9.32372 4.20614 9.69791 5.3003 9.63907 6.41587C9.63907 6.64971 9.72976 6.87397 9.89118 7.03932C10.0526 7.20467 10.2715 7.29756 10.4998 7.29756C10.7281 7.29756 10.9471 7.20467 11.1085 7.03932C11.2699 6.87397 11.3606 6.64971 11.3606 6.41587C11.3018 5.3003 11.676 4.20614 12.4016 3.37204C13.1272 2.53794 14.1454 2.03158 15.234 1.96338C16.3227 2.03158 17.3409 2.53794 18.0665 3.37204C18.7921 4.20614 19.1663 5.3003 19.1075 6.41587C19.1075 8.9754 16.5708 12.622 12.1482 16.4194V16.423Z"/>
                                </svg>
                            )
                        }
                    </button>
                </> : <>
                    <button onClick={openFavoritesWarning} className={className || 'advert__btn'}>
                        <svg className="like-icon" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.234 0.200012C14.2648 0.215455 13.3167 0.492601 12.4854 1.00346C11.6542 1.51433 10.9693 2.24082 10.4998 3.10956C10.0304 2.24082 9.3455 1.51433 8.51426 1.00346C7.68302 0.492601 6.7349 0.215455 5.76564 0.200012C4.22051 0.268775 2.76476 0.961128 1.71642 2.12581C0.668072 3.2905 0.112354 4.83284 0.170671 6.41587C0.170671 10.4249 4.29029 14.8033 7.74539 17.7719C8.51682 18.436 9.49219 18.8 10.4998 18.8C11.5075 18.8 12.4828 18.436 13.2543 17.7719C16.7094 14.8033 20.829 10.4249 20.829 6.41587C20.8873 4.83284 20.3316 3.2905 19.2833 2.12581C18.2349 0.961128 16.7792 0.268775 15.234 0.200012ZM12.1482 16.423C11.6868 16.8209 11.103 17.0392 10.4998 17.0392C9.89665 17.0392 9.31286 16.8209 8.85147 16.423C4.42887 12.622 1.8922 8.9754 1.8922 6.41587C1.83336 5.3003 2.20755 4.20614 2.93317 3.37204C3.6588 2.53794 4.67697 2.03158 5.76564 1.96338C6.8543 2.03158 7.87248 2.53794 8.5981 3.37204C9.32372 4.20614 9.69791 5.3003 9.63907 6.41587C9.63907 6.64971 9.72976 6.87397 9.89118 7.03932C10.0526 7.20467 10.2715 7.29756 10.4998 7.29756C10.7281 7.29756 10.9471 7.20467 11.1085 7.03932C11.2699 6.87397 11.3606 6.64971 11.3606 6.41587C11.3018 5.3003 11.676 4.20614 12.4016 3.37204C13.1272 2.53794 14.1454 2.03158 15.234 1.96338C16.3227 2.03158 17.3409 2.53794 18.0665 3.37204C18.7921 4.20614 19.1663 5.3003 19.1075 6.41587C19.1075 8.9754 16.5708 12.622 12.1482 16.4194V16.423Z"/>
                        </svg>
                    </button>
                </>
            }
            
        </>
    );
}

export default LikeButton;