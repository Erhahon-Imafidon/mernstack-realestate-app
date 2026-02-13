import SearchProperties from './SearchProperties';
import Counter from './Counter';

const HeroHome = () => {
    return (
        <section className="container flex flex-col md:flex-row gap-x-5 w-full relative font-lato">
            <div className="w-full lg:w-[60%] pt-20 md:pt-35">
                <div>
                    <h1 className="text-4xl/10 md:text-5xl/15 font-semibold text-balance">
                        The Next Standard in Urban Living Own the Future of Real
                        Estate
                    </h1>
                    <p className="mt-5 text-balance">
                        UrbnNext is redefining real estate for a new generation
                        of homeowners and investors. We combine strategic
                        locations, modern design, and data-driven insight to
                        help you secure properties that don’t just look good—but
                        grow in value. Whether you’re buying your first home,
                        expanding your portfolio, or investing in emerging urban
                        hotspots, UrbnNext positions you ahead of the market
                        with confidence and clarity.
                    </p>
                </div>

                {/* SEARCH SECTION  */}
                <SearchProperties />

                <div className="flex items-center justify-between">
                    <Counter count="16+" label="Years of Experience" />
                    <Counter count="200" label="Award Gained" />
                    <Counter count="1200+" label="Properties Ready" />
                </div>
            </div>

            <div className="absolute inset-y-0 -z-1 w-1/3 bg-secondary h-screen right-0" />

            <div className="w-full lg:w-[40%] relative">
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
