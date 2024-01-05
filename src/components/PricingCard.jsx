function PricingCard({ data, isMonthly }) {
    const {
        name,
        priceMonthly,
        priceAnnually,
        storage,
        usersAllowed,
        fileSize,
        mostPopular,
    } = data

    return (
        <div
            className={`  shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg flex flex-col gap-4 items-center px-7 py-9 w-full max-w-[350px] ${
                mostPopular
                    ? 'bg-gradient-to-b from-purple-light to-purple-dark text-grayish-blue-very-light lg:scale-105 lg:py-12'
                    : 'bg-grayish-blue-very-light text-grayish-blue'
            }`}
        >
            <h2 className="text-sm">{name}</h2>
            <p
                className={`text-6xl ${
                    mostPopular
                        ? 'text-grayish-blue-very-light'
                        : 'text-grayish-blue-dark'
                } `}
            >
                ${isMonthly ? priceMonthly : priceAnnually}
            </p>
            <ul className="text-center text-sm  w-full mt-4">
                <li className="py-4 border-b-[1px] first:border-t-[1px]">
                    {storage} Storage
                </li>
                <li className="py-4 border-b-[1px] first:border-t-[1px]">
                    {usersAllowed} Allowed
                </li>
                <li className="py-4 border-b-[1px] first:border-t-[1px]">
                    Send up to {fileSize} GB
                </li>
            </ul>
            <button
                className={`bg-gradient-to-r uppercase text-sm tracking-widest  w-full py-3 px-3 rounded-md cursor-pointer hover:from-transparent transition-all outline outline-1 outline-transparent  duration-300  border-transparent mt-3 ${
                    mostPopular
                        ? ' from-grayish-blue-very-light to-grayish-blue-very-light text-purple-dark hover:text-grayish-blue-very-light hover:outline-grayish-blue-very-light'
                        : 'from-purple-light to-purple-dark text-grayish-blue-very-light hover:text-purple-dark hover:outline-purple-dark'
                }`}
            >
                learn more
            </button>

            {/* <button
                className={`bg-red-300 uppercase text-sm tracking-widest  w-full py-3 rounded-md cursor-pointer transition-all duration-300 border border-transparent hover:border-red-700 hover:bg-transparent hover:text-blue-700 mt-3 }`}
            >
                learn more
            </button> */}
        </div>
    )
}

export default PricingCard
