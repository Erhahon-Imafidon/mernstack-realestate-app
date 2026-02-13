import {
    useInView,
    useMotionValue,
    useTransform,
    animate,
    motion,
} from 'motion/react';
import { useEffect, useRef } from 'react';

interface CounterProps {
    count: string;
    label: string;
}

const Counter = ({ count, label }: CounterProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    // Parse numeric value and suffix (e.g. "16+" → 16 and "+")
    const numericValue = parseInt(count.replace(/[^0-9]/g, ''), 10) || 0;
    const suffix = count.replace(/[0-9]/g, '');

    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, numericValue, {
                duration: 2,
                ease: 'easeOut',
            });
            return () => controls.stop();
        }
    }, [isInView, motionValue, numericValue]);

    return (
        <div ref={ref} className="flex flex-col gap-y-1 mt-5">
            <span className="text-4xl font-bold">
                <motion.span>{rounded}</motion.span>
                {suffix}
            </span>
            <span className="text-xl font-light">{label}</span>
        </div>
    );
};

export default Counter;
