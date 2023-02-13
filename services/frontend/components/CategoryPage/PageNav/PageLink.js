import Link from "next/link";
import { useRouter } from "next/router";

const PageLink = ({page, number}) => {
    const {query, pathname} = useRouter()

    const currentPage = !query.page ? 0 : query.page

    const isSelectedStyle = +currentPage === +page ? ' page-link--selcted' : ''

    const link = pathname !== '/adverts' ? `/adverts/${query.category}/${page}/` 
                : `/adverts/?page=${page}&search=${query.search}&category=${query.category}`

    return (
        <>
            <Link className={"page-link"+isSelectedStyle} href={link} >{number}</Link>
        </>
    );
}

export default PageLink;