import AuthContainer from "./Auth/AuthContainer";
import SearchProducts from "./SearchProducts/SearchProducts";

const Services = () => {
    return (
        <>
            <div className="services-wrapper">
                <SearchProducts />
                <AuthContainer />
            </div>
            
        </>
    );
}

export default Services;