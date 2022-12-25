const LoginDecoration = () => {
    return (
        <>
            <div className="reg-decoration reg-decoration--step3" style={{backgroundImage: 'url(/img/auth/background_gradient_last.png)'}}>
                <img src="/img/auth/living_room.png" className="reg-decoration__room" />
                <img src="/img/auth/camera_decor.png" className="reg-decoration__camera reg-decoration__camera--step2" />
                <img src="/img/auth/iphone.png" className="reg-decoration__iphone reg-decoration__iphone--step2" />
                <img src="/img/auth/car_decor.png" className="reg-decoration__car" />
                <img src="/img/auth/kettle.png" className="reg-decoration__kettle" />
            </div>
        </>
    );
}

export default LoginDecoration;