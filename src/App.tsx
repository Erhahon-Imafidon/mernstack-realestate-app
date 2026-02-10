import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { LazyFallback } from './components/ui';

// Lazy load heavy pages - code split by route
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Agents = lazy(() => import('@/pages/Agents'));

// Keep auth pages inline - they're needed immediately and are lightweight
import Login from '@/pages/Login';
import SignIn from '@/pages/SignIn';

const App = () => {
    return (
        <>
            <ScrollToTop />

            <Suspense fallback={<LazyFallback />}>
                <Routes>
                    <Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signin" element={<SignIn />} />
                    </Route>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/agents" element={<Agents />} />
                        <Route path="*" element={<div>404 Not Found</div>} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
