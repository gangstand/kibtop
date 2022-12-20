const Layout1 = () => {
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
                            <div className="form__fields">
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

                                <div className="form__field">
                                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9617 5L12.9467 12.2328C12.1645 13.0372 11.1048 13.489 10 13.489C8.89521 13.489 7.83552 13.0372 7.05333 12.2328L0.0383333 5C0.0266667 5.13575 0 5.25862 0 5.39352V15.704C0.00132321 16.8429 0.440735 17.9349 1.22185 18.7402C2.00296 19.5456 3.062 19.9986 4.16667 20H15.8333C16.938 19.9986 17.997 19.5456 18.7782 18.7402C19.5593 17.9349 19.9987 16.8429 20 15.704V5.39352C20 5.25862 19.9733 5.13575 19.9617 5Z" />
                                        <path d="M12.291 10.2944L20 2.94084C19.6266 2.35023 19.0998 1.86137 18.4707 1.52142C17.8415 1.18146 17.1311 1.00188 16.408 1H4.59204C3.86892 1.00188 3.15852 1.18146 2.52934 1.52142C1.90016 1.86137 1.37345 2.35023 1 2.94084L8.70904 10.2944C9.18469 10.7463 9.82867 11 10.5 11C11.1713 11 11.8153 10.7463 12.291 10.2944Z" />
                                    </svg>
                                    <input placeholder={t("Your email")} type="text" />
                                </div>
                            </div>
                            
                            <a className="reg-btn"><Text content="Next" /></a>

                            <fieldset className="alt-reg">
                                <legend className="alt-reg__legend"><Text content="Sing in with Google or Facebook" /></legend>
                                
                                <div className="alt-reg__btns">
                                    <button className="alt-reg__btn alt-reg__btn--google">
                                        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_508_4324)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M29.4 15.3409C29.4 14.2773 29.3045 13.2546 29.1273 12.2727H15V18.075H23.0727C22.725 19.95 21.6682 21.5387 20.0795 22.6023V26.3659H24.9273C27.7636 23.7546 29.4 19.9091 29.4 15.3409Z" fill="#4285F4"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15 30C19.05 30 22.4455 28.6568 24.9273 26.3659L20.0795 22.6023C18.7364 23.5023 17.0182 24.0341 15 24.0341C11.0932 24.0341 7.78637 21.3954 6.60682 17.85H1.59546V21.7363C4.06364 26.6386 9.13637 30 15 30Z" fill="#34A853"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.60682 17.85C6.30682 16.95 6.13636 15.9886 6.13636 15C6.13636 14.0114 6.30682 13.05 6.60682 12.15V8.26365H1.59545C0.579545 10.2886 0 12.5796 0 15C0 17.4205 0.579545 19.7114 1.59545 21.7364L6.60682 17.85Z" fill="#FBBC05"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15 5.96591C17.2023 5.96591 19.1796 6.72273 20.7341 8.20909L25.0364 3.90682C22.4386 1.48636 19.0432 0 15 0C9.13637 0 4.06364 3.36136 1.59546 8.26364L6.60682 12.15C7.78637 8.60455 11.0932 5.96591 15 5.96591Z" fill="#EA4335"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_508_4324">
                                                    <rect width="30" height="30" rx="6" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>

                                        Google
                                    </button>

                                    <button className="alt-reg__btn alt-reg__btn--facebook">
                                        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="30" height="30" rx="15" fill="#1877F2"/>
                                            <path d="M20.8389 19.3359L21.5039 15H17.3438V12.1875C17.3438 11.001 17.9238 9.84375 19.7871 9.84375H21.6797V6.15234C21.6797 6.15234 19.9629 5.85938 18.3223 5.85938C14.8945 5.85938 12.6562 7.93652 12.6562 11.6953V15H8.84766V19.3359H12.6562V29.8184C13.4209 29.9385 14.2031 30 15 30C15.7969 30 16.5791 29.9385 17.3438 29.8184V19.3359H20.8389Z" fill="white"/>
                                        </svg>

                                        Facebook
                                    </button>
                                </div>
                            </fieldset>

                            <p className="to-login"><Text content="Already have an account" />? <Link href="/login"><Text content="Login" /></Link></p>
                        </div>
                    </form>


                    <div className="reg-decoration" style={{backgroundImage: 'url(/img/auth/background_gradient.png)'}}>
                        <img src="/img/auth/living_room.png" className="reg-decoration__room" />
                        <img src="/img/auth/camera_decor.png" className="reg-decoration__camera" />
                        <img src="/img/auth/iphone.png" className="reg-decoration__iphone" />
                        <img src="/img/auth/car_decor.png" className="reg-decoration__car" />
                        <img src="/img/auth/kettle.png" className="reg-decoration__kettle" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Layout1;