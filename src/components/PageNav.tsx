import data from "../data.json"
import { Link } from "react-router-dom"
import speakerImg from "../assets/shared/mobile/image-zx9-speaker.jpg"
import headphoneImg from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg"
import earphoneImg from "../assets/shared/mobile/image-xx99-mark-two-headphones.jpg"
import iconRight from "../assets/shared/desktop/icon-arrow-right.svg"

const PageNav = () => {
    console.log(data)
    return (
        <section className="mt-10 mb-[120px] mx-6">
            <div className="border border-green-500">
                <div className="h-[165px] bg-gray-900 relative border border-red-900">
                    <div className="absolute -top-[52px]">
                        <img src={headphoneImg} alt="headphones" className="h-[104px] w-full border border-red-500" />
                        <h3>HEADPHONES</h3>
                        <Link to="">
                        SHOP
                        <img src={iconRight} alt="right-icon" />
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