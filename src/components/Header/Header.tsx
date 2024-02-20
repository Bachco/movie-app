import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import "./Header.scss";
import { useAppDispatch, useAppSelector } from '../../hooks/storeHook';
import { toggleTheme } from '../../features/theme/themeSlice';
import Nav from '../Nav/Nav';

const Header = () => {
    const { darkTheme } = useAppSelector(state => state);

    const dispatch = useAppDispatch();

    const onToggle = () => dispatch(toggleTheme());

    return (
        <div className='Header mb-20'>
            <nav className='border-b border-gray-200 border-opacity-25 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <a href="#1">
                        <span className='self-center text-xl font-semibold whitespace-nowrap'>
                            Movies
                        </span>
                    </a>
                    <Nav />
                    <div className='flex items-center lg:order-2'>
                        {darkTheme ? <BsSun onClick={() => onToggle()} className='Header__icon' /> : <BsFillMoonFill onClick={() => onToggle()} className='Header__icon' />}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
