const Header = ({ isMonthly, setIsMonthly }) => {
    return (
        <header className="py-10 flex flex-col items-center gap-8">
            <h1 className="text-3xl text-grayish-blue">Our Pricing</h1>
            <div className="flex items-center gap-4 ">
                <span className="text-grayish-blue/60 text-sm tracking-wide">
                    Annualy
                </span>
                <div
                    onClick={() => setIsMonthly((prev) => !prev)}
                    className="p-1 w-14 bg-gradient-to-r from-purple-light to-purple-dark rounded-full cursor-pointer"
                >
                    <div
                        className={`transition-all h-5 w-5 rounded-full shadow-sm bg-grayish-blue-very-light duration-200  ${
                            isMonthly ? 'ml-7' : ''
                        }`}
                    ></div>
                </div>
                <span className="text-grayish-blue/60 text-sm tracking-wide">
                    Monthly
                </span>
            </div>
        </header>
    )
}

export default Header
