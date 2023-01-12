import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserFavoritesThunk } from '../../store/slices/FavoritesSlice';
import HeaderSettings from './HeaderSettings/HeaderSettings';

const Header = () => {
    const {userId, isAuthed} = useSelector(state => state.auth)
    const {favorites} = useSelector(state => state.favorites)
    const dispatch = useDispatch()

    useEffect(() => {
        if(isAuthed) dispatch(setUserFavoritesThunk(userId))
    }, [userId])

    return (
        <>
            <header className="header">
                <HeaderSettings />
            </header>
        </>
    );
}

export default Header;