import logo from "../assets/shared/desktop/logo.svg"
import FooterIcons from "./FooterIcons"
import NavLinks from "./NavLinks"

const Footer = () => {
    return (
        <footer className="relative bg-black-900 flex flex-col gap-12 px-6 pt-12 pb-[38px]
        md:px-10 md:pt-15 md:pb-[46px] md:gap-8 md:items-start lg:px-[165px] lg:pt-[75px] 
        lg:pb-12 lg:gap-9">
            <div className="w-full absolute top-0 left-0 md:left-10 lg:left-[165px]">
                <hr className="h-1 w-[101px] bg-orange-900 mx-auto md:mx-0"  />
            </div>
            <div className="flex flex-col gap-12 items-center md:items-start lg:flex-row
            md:gap-8 lg:justify-between lg:w-full">
                <img src={logo} alt="logo" className="h-[25px] w-[143px]" />
                <div className="flex flex-col text-[13px] gap-4 
                uppercase text-white text-center font-bold leading-[25px] tracking-[2px]
                md:flex-row md:gap-[34px] ">
                <NavLinks />
                </div>
            </div>
            <div className="text-white text-[15px] flex flex-col gap-12 items-center 
            text-opacity-50 md:items-start md:mb-20 lg:flex-row lg:justify-between 
            lg:w-full lg:mb-14">
                <p className="text-center font-medium leading-[25px] md:text-start lg:w-[540px]">
                    Audiophile is an all in one stop to fulfill your audio needs. 
                    We're a small team of music lovers and sound specialists 
                    who are devoted to helping you get the most out of personal 
                    audio. Come and visit our demo facility - we’re open 7 days a week.
                </p>
                <div className="hidden lg:flex h-6 gap-4 items-center lg:self-end">
                    <FooterIcons />
                </div>
            </div>
            <div className="w-full text-white text-[15px] flex flex-col gap-12 items-center 
            text-opacity-50 md:flex-row md:justify-between md:gap-0">
                <p className="text-center font-bold">Copyright 2021. All Rights Reserved</p>
                <div className="flex h-6 gap-4 items-center lg:hidden">
                    <FooterIcons />
                </div>
            </div>

        </footer>
    )
}

export default Footer