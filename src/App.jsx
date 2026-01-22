import Header from './components/Header'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Logos />
                <Features />
                <Pricing />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </>
    )
}

export default App
