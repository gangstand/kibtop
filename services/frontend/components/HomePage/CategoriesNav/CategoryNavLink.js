import Link from "next/link";
import Text from "../../Elementes/Text/Text";


const CategoryNavLink = ({id, link, text, backgroundColor, img}) => {
    return (
        <>
            <li className="categories-nav__category" key={id}>
                <Link href={link} className="categories-nav__link">
                    <div className="category-icon" style={{backgroundColor}}>
                        <img src={`/img/categories/${img}`} alt={text} />
                    </div>

                    <p className="button-text button-text--category"><Text content={text} /></p>
                </Link>
            </li>
        </>
    );
}

export default CategoryNavLink;