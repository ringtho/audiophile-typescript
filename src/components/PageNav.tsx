import { Link } from "react-router-dom"
import speakerImg from "../assets/shared/mobile/image-zx9-speaker.jpg"
import headphoneImg from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
import earphoneImg from "../assets/shared/mobile/image-xx99-mark-two-headphones.jpg"
import iconRight from "../assets/shared/desktop/icon-arrow-right.svg"

const PageNav = () => {
    return (
        <section className="mt-10 mb-[120px] mx-6">
            <div className="border border-green-500">
                <div className="h-[165px] bg-gray-900 relative">
                    <div className="absolute -top-[52px] mx-auto">
                        <img src={speakerImg} alt="headphones" className="h-[104px] w-full border border-orange-900" />
                        <h3 className="mt-9 mb-4">HEADPHONES</h3>
                        <Link to="/headphones" className="flex w-full border border-green-500 items-center
                        text-[13px] leading-[18px] text-black opacity-50 font-bold">
                        SHOP
                        <img src={iconRight} alt="right-icon" className="h-[10px] w-[5px] ml-[14px]"  />
                        </Link>
                    </div>
                </div>
                
            </div>
            <div></div>
            <div></div>
        </section>
    )
}

export default PageNav