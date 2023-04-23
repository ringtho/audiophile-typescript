import { NavLink } from "react-router-dom"

const NavLinks = () => {
    let activeLink = "text-orange-900 underline"
    return (
        <>
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
        </>
    )
}

export default NavLinks