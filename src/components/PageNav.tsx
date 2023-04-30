import { Link } from "react-router-dom"
import speakerImg from "../assets/shared/desktop/image-category-thumbnail-speakers.png"
import headphoneImg from "../assets/shared/desktop/image-category-thumbnail-headphones.png"
import earphoneImg from "../assets/shared/desktop/image-category-thumbnail-earphones.png"
import iconRight from "../assets/shared/desktop/icon-arrow-right.svg"

const PageNav = () => {
    return (
        <section className="mx-6 flex flex-col gap-4">
            <div className="h-[207px] relative flex justify-center">
                <div className="absolute bottom-0 h-[165px] bg-gray-900 
                w-full rounded-lg">
                </div>
                <div className="absolute top-0 text-center flex flex-col gap-4">
                    <img src={headphoneImg} alt="headphones" className="h-[104px]" />
                    <h3 className="font-bold text-[15px] leading-[20.5px] tracking-[1px]"
                    >HEADPHONES</h3>
                    <Link to="/headphones" className="flex w-full items-center justify-center
                    text-[13px] leading-[18px] tracking-[1px] text-black opacity-50 font-bold">
                    SHOP
                    <img src={iconRight} alt="right-icon" className="h-[10px] w-[5px] ml-[14px]"  />
                    </Link>
                </div>
            </div>
            <div className="h-[207px] relative flex justify-center">
                <div className="absolute bottom-0 h-[165px] bg-gray-900 
                w-full rounded-lg">
                </div>
                <div className="absolute top-0 text-center flex flex-col gap-4">
                    <img src={speakerImg} alt="headphones" className="h-[104px]" />
                    <h3 className="font-bold text-[15px] leading-[20.5px] tracking-[1px] uppercase"
                    >SPEAKERS</h3>
                    <Link to="/speakers" className="flex w-full items-center justify-center
                    text-[13px] leading-[18px] tracking-[1px] text-black opacity-50 font-bold">
                    SHOP
                    <img src={iconRight} alt="right-icon" className="h-[10px] w-[5px] ml-[14px]"  />
                    </Link>
                </div>
            </div>
            <div className="h-[207px] relative flex justify-center">
                <div className="absolute bottom-0 h-[165px] bg-gray-900 
                w-full rounded-lg">
                </div>
                <div className="absolute top-0 text-center flex flex-col gap-4">
                    <img src={earphoneImg} alt="headphones" className="h-[104px]" />
                    <h3 className="font-bold text-[15px] leading-[20.5px] tracking-[1px] uppercase"
                    >EARPHONES</h3>
                    <Link to="/earphones" className="flex w-full items-center justify-center
                    text-[13px] leading-[18px] tracking-[1px] text-black opacity-50 font-bold">
                    SHOP
                    <img src={iconRight} alt="right-icon" className="h-[10px] w-[5px] ml-[14px]"  />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PageNav