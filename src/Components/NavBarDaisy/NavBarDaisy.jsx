import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from '../Link/Link';
import { useState } from 'react';

const NavBarDaisy = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
    ];


    return (
        <nav className='bg-gray-500 text-white px-6 py-2 md:py-0 md:min-h-[56px] font-medium'>
            <div className='md:hidden text-2xl inline-block bg-gray-400 p-1 md:p-0 rounded-lg' onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineMenu></AiOutlineMenu> : <AiOutlineClose></AiOutlineClose>
                }
            </div>
            <ul className={`md:flex duration-100 absolute md:static
            ${open? '-top-[50%]':'top-8 left-12'}
            bg-gray-400 md:bg-gray-500 py-2 px-5 rounded-lg md:rounded-none`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBarDaisy;