import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Home = () => {
    return (

        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <h1 className="text-black-500">Home Page</h1>
            <Footer />
        </div>
        
    )
}

export default Home