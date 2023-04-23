import { ReactComponent as FacebookIcon 
} from "../assets/shared/desktop/icon-facebook.svg"
import { ReactComponent as TwitterIcon 
} from "../assets/shared/desktop/icon-twitter.svg"
import { ReactComponent as InstagramIcon 
} from "../assets/shared/desktop/icon-instagram.svg"

const FooterIcons = () => {
    return (
        <>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FacebookIcon className="text-white hover:text-orange-900" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <TwitterIcon className="text-white hover:text-orange-900" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <InstagramIcon className="text-white hover:text-orange-900" />
            </a>
        </>
    )
}

export default FooterIcons