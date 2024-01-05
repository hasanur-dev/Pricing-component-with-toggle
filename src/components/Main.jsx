import PricingCard from './PricingCard'

const Main = ({ pricing, isMonthly }) => {
    return (
        <main className="flex flex-col items-center gap-8 mt-6 px-8 pb-16 lg:flex-row lg:gap-0 lg:justify-center lg:mt-12">
            {pricing.map((p) => (
                <PricingCard key={p.id} data={p} isMonthly={isMonthly} />
            ))}
        </main>
    )
}

export default Main
