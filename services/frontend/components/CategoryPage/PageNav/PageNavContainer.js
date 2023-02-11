import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryPages } from "../../../store/slices/CategorySlice";
import PageNav from "./PageNav";

const PageNavContainer = ({serverPages = []}) => {
    const {query: {page}} = useRouter()
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()

    const pages = category.pages.length > 0 ? category.pages : serverPages

    const count = 4
    const currentPage = !page ? 0 : +page
    const beforePage = currentPage === 0 ? 0 : currentPage-1
    const lastPage = (beforePage+count < pages.length ) ? beforePage : pages.length - count
    const navPages = pages.slice(lastPage, beforePage+count)

    
    return <PageNav {...{pages: navPages, maxPage: category.pages.length}} />;
}

export default PageNavContainer;