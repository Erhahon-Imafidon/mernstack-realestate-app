import clsx from 'clsx';
import { HiOutlineRefresh } from 'react-icons/hi';

interface LoaderSpinner {
    variants?: 'default' | 'white' | 'dark' | 'profile';
}

const LoaderSpinner = ({ variants = 'dark' }: LoaderSpinner) => {
    return (
        <HiOutlineRefresh
            className={clsx('size-8 animate-spin rounded-full bg-transparent', {
                'text-primary': variants === 'default',
                'text-white': variants === 'white',
                'text-black': variants === 'dark',
            })}
        />
    );
};

export default LoaderSpinner;
