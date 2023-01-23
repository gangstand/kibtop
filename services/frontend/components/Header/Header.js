import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserFavoritesThunk } from '../../store/slices/FavoritesSlice';
import { getCitiesThunk } from '../../store/slices/LocationSlice';
import HeaderSettings from './HeaderSettings/HeaderSettings';

const Header = () => {
    const {locale} = useRouter()
    const {userId, isAuthed} = useSelector(state => state.auth)
    const {favorites} = useSelector(state => state.favorites)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCitiesThunk(locale))
        if(isAuthed) dispatch(setUserFavoritesThunk(userId))
    }, [userId, locale])

    return (
        <>
            <header className="header">
                <HeaderSettings />
            </header>
        </>
    );
}

export default Header;