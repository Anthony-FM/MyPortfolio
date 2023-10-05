// Css
import './index.css'

// Redux
import { useSelector } from 'react-redux'
import { selectMyslice } from '../../utils/redux/selector'
// Assets
import GithubBlack from '../../assets/skills/github-black.svg'
import GithubWhite from '../../assets/github-white.svg'
import Linkedin from '../../assets/linkedin-black.png'
import LinkedinWhite from '../../assets/linkedin-white.svg'
// Composants
import Pictos from '../Pictos'

export default function Footer(){
    const darkMode = useSelector(selectMyslice).darkMode
    return <footer className="backgroundColor-black">
        <div className="footer-text color-white">
            Portfolio réalisé avec ❤️ par <br/> Anthony Fouda-Many | 2023
             
        </div>
        <div className="footer-pictosContainer">
            <Pictos 
                link="https://github.com/Anthony-FM"
                img={darkMode ? GithubBlack : GithubWhite }
                imgName="github link"
                animation='false'
            />
            <Pictos 
                link="https://www.linkedin.com/in/anthony-fouda-many/"
                img={darkMode ? Linkedin : LinkedinWhite}
                imgName="linkedin link"
                animation='false'
            />
        </div>
    </footer>
}