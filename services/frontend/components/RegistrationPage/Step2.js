const Layout2 = () => {
    return (
        <>
            <section className="section">
                <div className="container container--reg">
                    <form className="form">
                        <div className="form__step">
                            <div className="form__head">
                                <h2 className="form__title"><Text content="Create new account" /></h2>
                                <p className="form__count">1 <Text content="of"/> 2</p>
                            </div>
                            <div className="form__fields form__fields--file">
                                <div className="form__field">
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9617 5L12.9467 12.2328C12.1645 13.0372 11.1048 13.489 10 13.489C8.89521 13.489 7.83552 13.0372 7.05333 12.2328L0.0383333 5C0.0266667 5.13575 0 5.25862 0 5.39352V15.704C0.00132321 16.8429 0.440735 17.9349 1.22185 18.7402C2.00296 19.5456 3.062 19.9986 4.16667 20H15.8333C16.938 19.9986 17.997 19.5456 18.7782 18.7402C19.5593 17.9349 19.9987 16.8429 20 15.704V5.39352C20 5.25862 19.9733 5.13575 19.9617 5Z" />
                                        <path d="M12.291 10.2944L20 2.94084C19.6266 2.35023 19.0998 1.86137 18.4707 1.52142C17.8415 1.18146 17.1311 1.00188 16.408 1H4.59204C3.86892 1.00188 3.15852 1.18146 2.52934 1.52142C1.90016 1.86137 1.37345 2.35023 1 2.94084L8.70904 10.2944C9.18469 10.7463 9.82867 11 10.5 11C11.1713 11 11.8153 10.7463 12.291 10.2944Z" />
                                    </svg>
                                    <input placeholder={t("Your email")} type="text" />
                                </div>

                                <div className="form__field">
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9617 5L12.9467 12.2328C12.1645 13.0372 11.1048 13.489 10 13.489C8.89521 13.489 7.83552 13.0372 7.05333 12.2328L0.0383333 5C0.0266667 5.13575 0 5.25862 0 5.39352V15.704C0.00132321 16.8429 0.440735 17.9349 1.22185 18.7402C2.00296 19.5456 3.062 19.9986 4.16667 20H15.8333C16.938 19.9986 17.997 19.5456 18.7782 18.7402C19.5593 17.9349 19.9987 16.8429 20 15.704V5.39352C20 5.25862 19.9733 5.13575 19.9617 5Z" />
                                        <path d="M12.291 10.2944L20 2.94084C19.6266 2.35023 19.0998 1.86137 18.4707 1.52142C17.8415 1.18146 17.1311 1.00188 16.408 1H4.59204C3.86892 1.00188 3.15852 1.18146 2.52934 1.52142C1.90016 1.86137 1.37345 2.35023 1 2.94084L8.70904 10.2944C9.18469 10.7463 9.82867 11 10.5 11C11.1713 11 11.8153 10.7463 12.291 10.2944Z" />
                                    </svg>
                                    <input placeholder={t("Your email")} type="text" />
                                </div>

                                <div className="form__file-field">
                                    <p className="form__text"><Text content="Add photo" /></p>

                                    <label htmlFor="avatar" className="label-file">
                                        <input id="avatar" type="text" />

                                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_508_6265)">
                                                <path d="M30 5.33333L27.6124 2.07644C27.1368 1.43254 26.5282 0.910963 25.8326 0.551207C25.1371 0.191451 24.3728 0.00295652 23.5978 0L17.0688 0C16.2938 0.00295652 15.5295 0.191451 14.8339 0.551207C14.1384 0.910963 13.5297 1.43254 13.0541 2.07644L10.6666 5.33333H30Z" fill="#BDBDBD"/>
                                                <path d="M20 30C23.6819 30 26.6667 27.0152 26.6667 23.3333C26.6667 19.6514 23.6819 16.6667 20 16.6667C16.3181 16.6667 13.3334 19.6514 13.3334 23.3333C13.3334 27.0152 16.3181 30 20 30Z" fill="#BDBDBD"/>
                                                <path d="M31.6667 8H8.33333C6.12401 8.00267 4.00593 8.89075 2.4437 10.4694C0.88147 12.0481 0.00264643 14.1885 0 16.4211L0 31.5789C0.00264643 33.8115 0.88147 35.9519 2.4437 37.5306C4.00593 39.1093 6.12401 39.9973 8.33333 40H31.6667C33.876 39.9973 35.9941 39.1093 37.5563 37.5306C39.1185 35.9519 39.9974 33.8115 40 31.5789V16.4211C39.9974 14.1885 39.1185 12.0481 37.5563 10.4694C35.9941 8.89075 33.876 8.00267 31.6667 8ZM20 33.2632C18.0222 33.2632 16.0888 32.6705 14.4443 31.5601C12.7998 30.4497 11.5181 28.8715 10.7612 27.025C10.0043 25.1785 9.80629 23.1467 10.1921 21.1865C10.578 19.2262 11.5304 17.4256 12.9289 16.0124C14.3275 14.5991 16.1093 13.6367 18.0491 13.2468C19.9889 12.8569 21.9996 13.057 23.8268 13.8218C25.6541 14.5867 27.2159 15.8819 28.3147 17.5437C29.4135 19.2055 30 21.1593 30 23.1579C29.9974 25.8372 28.9429 28.4059 27.0681 30.3004C25.1934 32.195 22.6514 33.2605 20 33.2632Z" fill="#BDBDBD"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_508_6265">
                                                    <rect width="40" height="40" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </label>

                                    <div className="form__help">
                                        <p><Text content="Formats" />: jpg, jpeg, png.</p>
                                        <p><Text content="Maximum size" /> 6000*6000px,</p>
                                        <p><Text content="weight no more than" /> 10Mb.</p>
                                        <p><Text content="weight not less than" /> 30 KB.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <button className="reg-btn"><Text content="Next" /></button>
                            <button className="reg-btn reg-btn--free"><Text content="Skip" /></button>
                        </div>
                    </form>


                    <div className="reg-decoration reg-decoration--step2" style={{backgroundImage: 'url(/img/auth/background_gradient.png)'}}>
                        <img src="/img/auth/living_room.png" className="reg-decoration__room" />
                        <img src="/img/auth/camera_decor.png" className="reg-decoration__camera reg-decoration__camera--step2" />
                        <img src="/img/auth/iphone.png" className="reg-decoration__iphone reg-decoration__iphone--step2" />
                        <img src="/img/auth/car_decor.png" className="reg-decoration__car" />
                        <img src="/img/auth/kettle.png" className="reg-decoration__kettle" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Layout2;