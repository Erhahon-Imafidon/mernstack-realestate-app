import { LoaderSpinner } from '../skeletons';

const LazyFallback = () => (
    <div className="flex min-h-screen items-center justify-center">
        <LoaderSpinner />
    </div>
);

export default LazyFallback;
