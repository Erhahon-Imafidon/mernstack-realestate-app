import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import Spacer from './ui/Spacer';

const Layout = () => {
    return (
        <main>
            <Navbar />
            <Spacer size={100} />
            <Outlet />
            <Footer />
        </main>
    );
};

export default Layout;
