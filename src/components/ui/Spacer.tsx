const Spacer = ({
    size = 50,
    className,
}: {
    size?: number;
    className?: string;
}) => {
    return <div className={`${className}`} style={{ height: `${size}px` }} />;
};
export default Spacer;
