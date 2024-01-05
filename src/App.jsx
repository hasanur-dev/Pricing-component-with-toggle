import Main from './components/Main'
import Header from './components/Header'
import Container from './components/Container'
import { useState } from 'react'

const pricing = [
    {
        id: 1,
        name: 'Basic',
        priceMonthly: 19.99,
        priceAnnually: 199.99,
        storage: '500 GB',
        usersAllowed: 2,
        fileSize: 3,
        mostPopular: false,
    },
    {
        id: 2,
        name: 'Professional',
        priceMonthly: 24.99,
        priceAnnually: 249.99,
        storage: '1 TB',
        usersAllowed: '5',
        fileSize: 10,
        mostPopular: true,
    },
    {
        id: 3,
        name: 'Master',
        priceMonthly: 39.99,
        priceAnnually: 399.99,
        storage: '2 TB',
        usersAllowed: 10,
        fileSize: 20,
        mostPopular: false,
    },
]

export default function App() {
    const [isMonthly, setIsMonthly] = useState(false)
    return (
        <Container>
            <Header isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
            <Main pricing={pricing} isMonthly={isMonthly} />
        </Container>
    )
}
