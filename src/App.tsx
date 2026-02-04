import { Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { LazyFallback } from './components/ui';

// Lazy load heavy pages - code split by route
const Home = lazy(() => import('./pages/Home'));

const App = () => {
    return (
        <>
            <ScrollToTop />

            <Suspense fallback={<LazyFallback />}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
