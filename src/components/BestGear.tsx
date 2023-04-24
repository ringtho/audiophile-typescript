import bestGearImg from "../assets/shared/mobile/image-best-gear.jpg"

const BestGear = () => {
    return (
        <section className="my-[120px] mx-6 flex flex-col gap-10">
            <img src={bestGearImg} alt="description-pic" className="h-75 rounded-2xl" />
            <div className="flex flex-col gap-8">
                <h3 className="font-bold text-[28px] uppercase trailing-[1px] 
                leading-[38.5px] text-center"
                >Bringing you the <span className="text-orange-900">best</span> audio gear
                </h3>
                <p className="font-[15px] text-black opacity-50 font-medium leading-[25px]
                text-center">
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