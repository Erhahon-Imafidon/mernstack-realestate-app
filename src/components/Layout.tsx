import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    );
};

export default Layout;
