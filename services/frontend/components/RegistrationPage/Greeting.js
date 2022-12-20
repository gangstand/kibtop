const Greeting = () => {
    return (
        <>
            <section className="section section--reg">
                <nav className="reg-nav">
                    <button className="reg-nav__back">
                        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.916664 10.3229L4.94792 6.25002C5.04475 6.15238 5.15996 6.07489 5.2869 6.02201C5.41384 5.96912 5.54999 5.94189 5.6875 5.94189C5.82501 5.94189 5.96116 5.96912 6.0881 6.02201C6.21503 6.07489 6.33025 6.15238 6.42708 6.25002C6.62109 6.44519 6.72999 6.7092 6.72999 6.98439C6.72999 7.25959 6.62109 7.5236 6.42708 7.71877L2.71875 11.4584L23.9583 11.4584C24.2346 11.4584 24.4996 11.5681 24.6949 11.7634C24.8903 11.9588 25 12.2238 25 12.5V12.5C25 12.7763 24.8903 13.0412 24.6949 13.2366C24.4996 13.4319 24.2346 13.5417 23.9583 13.5417L2.65625 13.5417L6.42708 17.3021C6.52472 17.3989 6.60221 17.5141 6.65509 17.6411C6.70798 17.768 6.7352 17.9042 6.7352 18.0417C6.7352 18.1792 6.70798 18.3153 6.65509 18.4423C6.60221 18.5692 6.52472 18.6844 6.42708 18.7813C6.33025 18.8789 6.21503 18.9564 6.0881 19.0093C5.96116 19.0622 5.82501 19.0894 5.6875 19.0894C5.54999 19.0894 5.41384 19.0622 5.2869 19.0093C5.15996 18.9564 5.04475 18.8789 4.94792 18.7813L0.916664 14.7396C0.331453 14.1537 0.00274849 13.3594 0.00274849 12.5313C0.00274849 11.7031 0.331453 10.9089 0.916664 10.3229Z" fill="#414042"/>
                        </svg>
                    </button>
                </nav>

                <div className="container container--reg">
                    <article className="greeting">
                        <h2 className="reg-title"><Text content="Create new account" /></h2>

                        <div className="greeting__desc">
                            <svg className="greeting__img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="#71CD96"/>
                                <path d="M32.9153 55C31.7799 55.0005 30.6909 54.5472 29.8888 53.7402L20.7384 44.5538C19.7539 43.5647 19.7539 41.9613 20.7384 40.9721C21.7233 39.9833 23.3198 39.9833 24.3047 40.9721L32.9153 49.6199L55.6953 26.7416C56.6802 25.7528 58.2767 25.7528 59.2616 26.7416C60.2461 27.7308 60.2461 29.3342 59.2616 30.3233L35.9419 53.7402C35.1397 54.5472 34.0508 55.0005 32.9153 55Z" fill="white"/>
                            </svg>

                            <div className="greeting__content">
                                <h3 className="greeting__title"><Text content="Ready! Welcome to kibtop" /></h3>
                                <p className="greeting__text"><Text content="Now you can place your ad or buy products" /></p>
                            </div>
                        </div>
                        
                        <button className="reg-btn"><Text content="Watch ads" /></button>
                        <button className="reg-btn reg-btn--free"><Text content="Place ad" /></button>
                    </article>


                    <div className="reg-decoration reg-decoration--step3" style={{backgroundImage: 'url(/img/auth/background_gradient.png)'}}>
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

export default Greeting;