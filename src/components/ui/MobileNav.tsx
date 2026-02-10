import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import type { Variants } from 'motion/react';
import { stagger, motion } from 'motion/react';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Agents', path: '/agents' },
    { name: 'Login', path: '/login' },
    { name: 'Sign In', path: '/signin' },
];

// Variants for the sidebar background - opens from right
const sidebarVariants: Variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(30px at calc(100% - 40px) 50px)',
        transition: {
            delay: 0.2,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

// Variants for the navigation list
const navVariants: Variants = {
    open: {
        transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
    },
    closed: {
        transition: { delayChildren: stagger(0.05, { from: 'last' }) },
    },
};

// Variants for each menu item
const itemVariants: Variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

// Animated hamburger path component
interface PathProps {
    d?: string;
    variants: Variants;
    transition?: { duration: number };
}

const Path = (props: PathProps) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        {...props}
    />
);

// Menu toggle button (hamburger)
const MenuToggle = ({
    toggle,
    isOpen,
}: {
    toggle: () => void;
    isOpen: boolean;
}) => (
    <button
        onClick={toggle}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="fixed right-4 top-6.5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-transparent outline-none"
    >
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' },
                }}
            />
        </svg>
    </button>
);

// Navigation list
const Navigation = ({ onClose }: { onClose: () => void }) => (
    <motion.ul
        variants={navVariants}
        className="absolute right-0 top-24 flex w-64 list-none flex-col gap-5 p-6"
    >
        {navLinks.map((link) => (
            <motion.li
                key={link.path}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
            >
                <NavLink
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                        `block rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                            isActive
                                ? 'bg-black/10 font-semibold'
                                : 'hover:bg-black/5'
                        }`
                    }
                >
                    {link.name}
                </NavLink>
            </motion.li>
        ))}
    </motion.ul>
);

// Custom hook to get dimensions
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
    }, [ref]);

    return dimensions.current;
};

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { height } = useDimensions(containerRef);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            ref={containerRef}
            className="relative md:hidden"
        >
            <motion.div
                variants={sidebarVariants}
                className="fixed bottom-0 right-0 top-0 w-72 bg-gray-100"
            />
            <Navigation onClose={() => setIsOpen(false)} />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </motion.nav>
    );
};

export default MobileNav;
