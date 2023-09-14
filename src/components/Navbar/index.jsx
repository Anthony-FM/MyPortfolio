// CSS
import "./index.css"
// Components
import DarkModeButton from "../DarkModeButton"
import BurgerMenu from "../BurgerMenu"
import Pictos from "../Pictos"
// assets
import LogoBlack from "../../assets/letter-a-black.png"
import LogoBlue from "../../assets/letter-a-blue.png"
import Github from '../../assets/skills/github.svg'
import GithubBlack from '../../assets/skills/github-black.svg'
import Linkedin from '../../assets/linkedin-black.png'
import LinkedinBlue from '../../assets/linkedin-blue.png'
// Link
import { Link } from "react-router-dom"
// Hook
import { useSelector } from "react-redux"
// Slice
import { selectMyslice } from "../../utils/redux/selector"

export default function Navbar(){
    const darkMode = useSelector(selectMyslice).darkMode
    const isBurgerOpen = useSelector(selectMyslice).isBurgerOpen
    return <nav className="navbar">
        <Link to="#Home">
            <img src={darkMode ? LogoBlue : LogoBlack} alt="Lettre A logo" className="logo" />
        </Link>
        <ul className="navbar-ul">
            <li className="navbar-li" key="about"><Link className={ darkMode ? "navbar-link color-white" : "navbar-link color-blue"} to="#about">A Propos</Link></li>
            <li className="navbar-li" key="portfolio"><Link className={ darkMode ? "navbar-link color-white" : "navbar-link color-blue"} to="#portfolio">Portfolio</Link></li>
            <li className="navbar-li" key="contact"><Link className={ darkMode ? "navbar-link color-white" : "navbar-link color-blue"} to="#contact">Contact</Link></li>
            
            <DarkModeButton/>
        </ul>
        <div className={ isBurgerOpen ? ( darkMode ? "navbar-mobile backgroundColor-blue": "navbar-mobile backgroundColor-white") : "navbar-mobile "}>
            <BurgerMenu/>
            <ul className={isBurgerOpen ? "navbar-ul-mobile flex move-right" : "navbar-ul-mobile none"}>
                <li className="navbar-li-mobile" key="about"><Link className={ darkMode ? "navbar-link color-white" : "navbar-link color-blue"} to="#about">A Propos</Link></li>
                <li className="navbar-li-mobile" key="portfolio"><Link className={ darkMode ? "navbar-link color-white" : "navbar-link color-blue"} to="#portfolio">Portfolio</Link></li>
                <li className="navbar-li-mobile" key="contact"><Link className={ darkMode ? "navbar-link color-white" : "navbar-link color-blue"} to="#contact">Contact</Link></li>
                
                <p className={darkMode ? "navbar-darkmode color-white" : "navbar-darkmode color-blue"}>{darkMode ? "Light Mode: " : "Dark Mode: "}<DarkModeButton/></p>
                <div className="pictos-container">
                    <Pictos 
                        link="https://github.com/Anthony-FM"
                        img={darkMode ? Github: GithubBlack }
                        imgName="github link"
                    />
                    <Pictos 
                        link="https://www.linkedin.com/in/anthony-fouda-many/"
                        img={darkMode ? LinkedinBlue :Linkedin}
                        imgName="linkedin link"
                    />
                </div>
            </ul>
        </div>
    </nav>
}