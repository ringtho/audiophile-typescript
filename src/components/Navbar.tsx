import logo from "../assets/shared/desktop/logo.svg"
import hamburgerMenu from "../assets/shared/tablet/icon-hamburger.svg"
import cartImg from "../assets/shared/desktop/icon-cart.svg"
import NavLinks from "./NavLinks"


const Navbar = () => {
    
    return (
        <header className="sticky top-0 z-999 py-8 px-6 bg-black-900 flex justify-between 
        items-center border-b-[1px] border-gray-500 gap-4 sm:justify-start sm:px-10
        md:flex md:justify-between lg:py-9 lg:px-[165px]">
            <img src={hamburgerMenu} alt="hamburger-menu" 
            className="h-4 w-4 sm:mr-[42px] md:hidden" />
            <img src={logo} alt="logo" className="h-[25px]" />
            <div className="hidden md:flex text-[13px] md:gap-8 
            uppercase text-white font-bold leading-[25px] tracking-[2px]">
            <NavLinks />
            </div>
            <img src={cartImg} alt="cart-img" className="h-5 w-[23px] sm:ml-auto md:ml-0" />

        </header>
        
    )
}

export default Navbar