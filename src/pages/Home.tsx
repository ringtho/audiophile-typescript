import BestGear from "../components/BestGear"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import headerImg from "../assets/home/mobile/image-header.jpg"
import PageNav from "../components/PageNav"
import data from "../data.json"

const Home = () => {
    console.log(data)
    return (

        <div className="min-h-screen flex flex-col justify-between relative bg-white">
            <Navbar />
            <section className="relative flex items-center z-0 mb-10">
                <img src={headerImg} alt="new-items" className="h-[600px] w-full" />
                <div className="absolute top-auto bottom-auto 
                text-white left-6 right-6 text-center z-0">
                    <h4 className="tracking-[10px] text-[14px] leading-[19px] 
                    opacity-50 font-normal"
                    >NEW PRODUCT</h4>
                    <h2 className="mt-4 mb-6 uppercase text-4xl font-bold tracking-[1.3px]"
                    >XX99 Mark II HeadphoneS</h2>
                    <p className="text-[15px] leading-[25px] font-medium opacity-75">
                    Experience natural, lifelike audio and exceptional build 
                    quality made for the passionate music enthusiast.
                    </p>
                    <button className="uppercase mt-7 bg-orange-900 text-[13px] font-bold
                    py-[15px] px-[30px] tracking-[1px]"
                    >See Product</button>
                </div>
            </section>
            <PageNav />
            <section>
                <div className="bg-orange-900">

                </div>
            </section>
            <BestGear />
            <Footer />
        </div>
        
    )
}

export default Home