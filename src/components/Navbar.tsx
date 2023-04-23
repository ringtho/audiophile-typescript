import logo from "../assets/shared/desktop/logo.svg"
import hamburgerMenu from "../assets/shared/tablet/icon-hamburger.svg"
import cartImg from "../assets/shared/desktop/icon-cart.svg"
import { NavLink } from "react-router-dom"


const Navbar = () => {
    let activeLink = "text-orange-900 underline"
    return (
        <header className="py-8 px-6 bg-black-900 flex justify-between 
        items-center border-b-1 border-white gap-4 sm:justify-start sm:px-10
        md:flex md:justify-between lg:py-9 lg:px-[165px]">
            <img src={hamburgerMenu} alt="hamburger-menu" 
            className="h-4 w-4 sm:mr-[42px] md:hidden" />
            <img src={logo} alt="logo" className="h-[25px]" />
            <div className="hidden md:flex md:text-[13px] md:gap-8 
            uppercase text-white font-bold leading-[25px] tracking-[2px]">
                <NavLink to="/" className={({ isActive }) => (
                    isActive ? activeLink : 
                    "hover:text-orange-900 transition-colors delay-75")}
                >
                Home</NavLink>
                <NavLink to="/headphones" 
                    className={({ isActive }) => (
                        isActive ? activeLink : 
                        "hover:text-orange-900 transition-colors delay-75")}
                >Headphones</NavLink>
                <NavLink to="/speakers" 
                    className={({ isActive }) => (
                        isActive ? activeLink : 
                        "hover:text-orange-900 transition-colors delay-75")}
                >Speakers</NavLink>
                <NavLink to="/earphones" 
                    className={({ isActive }) => (
                        isActive ? activeLink : 
                        "hover:text-orange-900 transition-colors delay-75")}
                >Earphones</NavLink>
            </div>
            <img src={cartImg} alt="cart-img" className="h-5 w-[23px] sm:ml-auto md:ml-0" />

        </header>
        
    )
}

export default Navbar