// Css
import './index.css'


// Assets
import GithubWhite from '../../assets/github-white.svg'
import LinkedinWhite from '../../assets/linkedin-white.svg'
// Composants
import PictosFooter from '../PictosFooter'

export default function Footer(){
    return <footer className="backgroundColor-black">
        <div className="footer-text color-white">
            Portfolio réalisé avec ❤️ par <br/> Anthony Fouda-Many | 2023
             
        </div>
        <div className="footer-pictosContainer">
            <PictosFooter 
                link="https://github.com/Anthony-FM"
                img={GithubWhite }
                imgName="github link"
                animation='false'
            />
            <PictosFooter
                link="https://www.linkedin.com/in/anthony-fouda-many/"
                img={LinkedinWhite}
                imgName="linkedin link"
                animation='false'
            />
        </div>
    </footer>
}