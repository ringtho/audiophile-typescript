import BestGear from "../components/BestGear"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Earphones = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <h1>Earphones Page</h1>
            <BestGear />
            <Footer />
        </div>
    )
}

export default Earphones