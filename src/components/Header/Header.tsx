import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import "./Header.scss";
import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';
import { toggleTheme } from '../../slices/themeSlice/themeSlice';
import Nav from '../Nav/Nav';

const Header = () => {
    const { darkTheme } = useAppSelector(state => state); // Accessing the darkTheme value from the Redux store
    const dispatch = useAppDispatch(); // Hook to dispatch actions
    const onToggle = () => dispatch(toggleTheme()); // Handler function to toggle the theme

    /** Template */
    return (
        <div className='Header mb-20'>
            <nav className='border-b border-gray-200 border-opacity-25 py-4'>
                <div className='grid sm:grid-cols-3 grid-cols-1 sm:justify-between justify-center items-center mx-auto max-w-screen-xl text-xl w-full gap-4 relative'>
                    <a href="/" className='text-center md:text-left'>
                        <span className='self-center text-4xl font-semibold whitespace-nowrap'>
                            Movies
                        </span>
                    </a>
                    <Nav />
                    <div className='flex items-center lg:order-2 justify-end sm:static absolute top-3 right-0'>
                        {darkTheme ? <BsFillMoonFill onClick={() => onToggle()} className='Header__icon' /> : <BsSun onClick={() => onToggle()} className='Header__icon' />}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
