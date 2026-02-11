const HeroHome = () => {
    return (
        <section className="container flex items-center gap-x-5 w-full relative">
            <div className="w-2/3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                reprehenderit necessitatibus magnam! Nostrum, expedita ab
                eligendi ullam voluptatem sequi laudantium!
            </div>
            <div className="absolute inset-y-0 -z-1 w-1/3 bg-secondary h-screen right-0" />

            <div className="w-[40%] relative">
                <img
                    src="./icons/bg.png"
                    alt="background image"
                    className="absolute -right-5 w-[115%]"
                />
            </div>
        </section>
    );
};

export default HeroHome;
