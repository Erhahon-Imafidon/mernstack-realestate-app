import { NavLink, Link } from 'react-router';

const Logo = '/icons/logo.png';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Agents', path: '/agents' },
];

const Navbar = () => {
    return (
        <header className="container font-lato fixed inset-x-0 top-0 flex items-center justify-between py-8">
            <div className="flex items-center gap-x-10">
                <Link to="/" className="flex items-center gap-x-2">
                    <img src={Logo} alt="Logo" className="size-10" />
                    <span className="text-2xl font-bold">Proptera-Realty</span>
                </Link>

                <nav>
                    <ul className="flex items-center gap-x-10">
                        {navLinks.map((link) => (
                            <li
                                key={link.path}
                                className="transition-transform hover:scale-105"
                            >
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        isActive ? 'font-semibold' : ''
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="flex items-center gap-x-10">
                <Link
                    to={'/login'}
                    className="transition-transform hover:scale-105"
                >
                    Login
                </Link>
                <Link
                    to={'/signin'}
                    className="bg-register px-5 py-2.5 transition-transform hover:scale-105"
                >
                    Sign In
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
