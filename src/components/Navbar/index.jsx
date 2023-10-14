// CSS
import "./index.css"
// HAsh Link
import { HashLink as Link} from 'react-router-hash-link'
// Components
import DarkModeButton from "../DarkModeButton"
import BurgerMenu from "../BurgerMenu"
import Pictos from "../Pictos"
// assets
import LogoBlack from "../../assets/letter-a-black.png"
import LogoBlue from "../../assets/letter-a-blue.png"
// import Github from '../../assets/skills/github.svg'
import GithubBlack from '../../assets/skills/github-black.svg'
import GithubWhite from '../../assets/github-white.svg'
import Linkedin from '../../assets/linkedin-black.png'
import LinkedinWhite from '../../assets/linkedin-white.svg'
// import LinkedinBlue from '../../assets/linkedin-blue.png'
import AboutBlue from '../../assets/a-blue.svg'
import AboutBlack from '../../assets/a-black.svg'
import AboutWhite from '../../assets/a-white.svg'
import PortfolioBlack from '../../assets/portfolio-black.svg'
import PortfolioBlue from '../../assets/portfolio-blue.svg'
import PortfolioWhite from '../../assets/portfolio-white.svg'
import ContactBlack from '../../assets/contact-black.svg'
import ContactBlue from '../../assets/contact-blue.svg'
import ContactWhite from '../../assets/contact-white.svg'

// Hook
import { useSelector } from "react-redux"
// Slice
import { selectMyslice, selectObserver } from "../../utils/redux/selector"


export default function Navbar(){
    const darkMode = useSelector(selectMyslice).darkMode
    const isBurgerOpen = useSelector(selectMyslice).isBurgerOpen
    const aboutIsVisible = useSelector(selectObserver).aboutIsVisible
    const portfolioIsVisible = useSelector(selectObserver).portfolioIsVisible
    const contactIsVisible = useSelector(selectObserver).contactIsVisible
    return <nav className="navbar">
        <Link to="#Home">
            <img src={darkMode ? LogoBlue : LogoBlack} alt="Lettre A logo" className="logo" />
        </Link>
        <ul className={darkMode ? "navbar-ul backgroundColor-white" : "navbar-ul backgroundColor-black"}>
            <li className="navbar-li" key="about"><Link className={ aboutIsVisible ? (darkMode ? "navbar-link color-black " : "navbar-link color-blue ") : (darkMode ? "navbar-link color-blue" : "navbar-link color-white")} to="#About">A Propos</Link></li>
            <li className="navbar-li" key="portfolio"><Link className={ portfolioIsVisible ? (darkMode ? "navbar-link color-black" : "navbar-link color-blue"): (darkMode ? "navbar-link color-blue" : "navbar-link color-white")} to="#portfolio">Portfolio</Link></li>
            <li className="navbar-li" key="contact"><Link className={contactIsVisible ? (darkMode ? "navbar-link color-black" : "navbar-link color-blue") : (darkMode ? "navbar-link color-blue" : "navbar-link color-white")} to="#contact">Contact</Link></li>
            
            <DarkModeButton/>
        </ul>
        <div className={ isBurgerOpen ? ( darkMode ? "navbar-mobile spaceWhenOpen backgroundColor-blue": "navbar-mobile spaceWhenOpen backgroundColor-black ") : ( darkMode ? "navbar-mobile spaceWhenClose backgroundColor-blue": "navbar-mobile spaceWhenClose backgroundColor-black ")}>
        <BurgerMenu/>
            <ul className={isBurgerOpen ? "navbar-ul-mobile animation-appearFromRight flex" : "navbar-ul-mobile animation-dissappearFromRight remove-right none"}>
                <li className="navbar-li-mobile" key="about">
                    <Link className={ darkMode ? "navbar-link color-white" : "navbar-link color-blue"} to="#About">
                        <div className="navIcone-container">
                            <img src={ aboutIsVisible ? (darkMode ? AboutWhite : AboutBlue) : (darkMode ? AboutBlack : AboutWhite)} alt="icone a propos" />
                        </div>
                    </Link>
                </li>
                <li className="navbar-li-mobile" key="portfolio">
                    <Link className={ darkMode ? "navbar-link color-white" : "navbar-link color-blue"} to="#portfolio">
                        <div className="navIcone-container">
                            <img src={portfolioIsVisible ? (darkMode ? PortfolioWhite : PortfolioBlue) : (darkMode ? PortfolioBlack : PortfolioWhite)} alt="icone a propos" />
                        </div>
                    </Link>
                </li>
                <li className="navbar-li-mobile" key="contact">
                    <Link className={ darkMode ? "navbar-link color-white" : "navbar-link color-blue"} to="#contact">
                    <div className="navIcone-container">
                            <img src={contactIsVisible ? (darkMode ? ContactWhite : ContactBlue) : (darkMode ? ContactBlack : ContactWhite)} alt="icone a propos" />
                        </div>
                    </Link>
                </li>
                
                <p className={darkMode ? "navbar-darkmode color-white" : "navbar-darkmode color-blue"}>
                    <DarkModeButton/>
                </p>
                <div className="pictos-container">
                    <Pictos 
                        link="https://github.com/Anthony-FM"
                        img={darkMode ? GithubBlack : GithubWhite }
                        imgName="github link"
                        animation='true'
                    />
                    <Pictos 
                        link="https://www.linkedin.com/in/anthony-fouda-many/"
                        img={darkMode ? Linkedin : LinkedinWhite}
                        imgName="linkedin link"
                        animation='true'
                    />
                </div>
            </ul>
        
        </div>
    </nav>
}