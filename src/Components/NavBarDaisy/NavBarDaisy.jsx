import React from 'react';

const NavBarDaisy = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
    ];


    return (
        <nav>
            <ul>
                {
                    routes.map(route => <li key={route.id}>
                        <a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul>
        </nav>
    );
};

export default NavBarDaisy;