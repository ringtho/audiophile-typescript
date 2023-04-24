import bestGearImg from "../assets/shared/mobile/image-best-gear.jpg"
import bestGearTablet from "../assets/shared/tablet/image-best-gear.jpg"
import bestGearDesktop from "../assets/shared/desktop/image-best-gear.jpg"

const BestGear = () => {
    return (
        <section className="my-[120px] mx-6 flex flex-col gap-10 md:my-[96px] 
        md:mx-10 lg:my-[200px] lg:mx-[165px] lg:flex-row-reverse lg:gap-[125px] lg:items-center ">
            <img src={bestGearImg} alt="description-pic" className="h-[300px] rounded-2xl sm:hidden" />
            <img src={bestGearTablet} alt="description-pic" className="hidden h-[300px] rounded-2xl sm:block lg:hidden" />
            <img src={bestGearDesktop} alt="description-pic" className="h-[588px] w-1/2 rounded-2xl hidden lg:block" />
            <div className="flex flex-col gap-8">
                <h3 className="font-bold text-[28px] uppercase trailing-[1px] 
                leading-[38.5px] text-center lg:text-left"
                >Bringing you the <span className="text-orange-900">best</span> audio gear
                </h3>
                <p className="font-[15px] text-black opacity-50 font-medium leading-[25px]
                text-center lg:text-left">
                    Located at the heart of New York City, Audiophile is the 
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury 
                    demonstration rooms available for you to browse and experience 
                    a wide range of our products. Stop by our store to meet some of 
                    the fantastic people who make Audiophile the best place to buy 
                    your portable audio equipment.
                </p>
            </div>
        </section>
    )
}

export default BestGear