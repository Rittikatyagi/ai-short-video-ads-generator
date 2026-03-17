import CTA from "../sections/CTA"
import Faq from "../sections/Faq"
import Features from "../sections/Features"
import Hero from "../sections/Hero"
import Pricing from "../sections/Pricing"


const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Pricing />
            <Faq />
            <CTA />
        </div>
    )
}

export default Home