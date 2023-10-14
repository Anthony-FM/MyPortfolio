// CSS
import './index.css'
// Components
import Keywords from '../Keywords'
import PictosFooter from '../PictosFooter'
//assets
import Github from '../../assets/skills/github.svg'
import PcWhite from '../../assets/pc-white.svg'
import PcBlue from '../../assets/pc-blue.svg'
// hook
import { useSelector} from 'react-redux'
// Slice
import { selectMyslice} from '../../utils/redux/selector';

export default function Cards({picture, githubLinks, link, description, keywords, projectName, index}){
    // states
    const darkMode = useSelector(selectMyslice).darkMode
    
    return <div className="card" key={`${projectName}-${index}`} >
        <div className={darkMode ? 'card-img-container drop-shadow-black border-blue' : "card-img-container"} key={`card-img${index}`}>
            <img src={picture} alt={projectName} className='card-img'/>
        </div>
        <div className={darkMode ? "keywords-container color-white" : "keywords-container"} >
            Keywords: { keywords ? keywords.map((keyword, index) => {
                return <Keywords 
                            keyword={keyword} 
                            index={index} 
                            projectName={projectName} 
                            key={index}
                        />
                }) : ""
            }
        </div>
        <div className={darkMode ? "description-container " : "description-container"}>
            <h3 className={darkMode ? "project-title color-white" : "project-title color-blue"}>{projectName}</h3>
            <div className={darkMode ? "description backgroundColor-white drop-shadow-blue" : "description backgroundColor-blue"}>
                {description ? description.map((text, index) => {
                    return <p 
                    className={darkMode ? "description-text color-blue " :"description-text color-white"} 
                    key={`${text.substring(0,5)}-${index}`}>{text}</p>
                    })
                    : ""
                }
                <div className="links-container">

                    {link ? <PictosFooter 
                        link={link}
                        img={darkMode ? PcBlue : PcWhite}
                        text="Visitez le projet: "
                    /> : ""}
                    <PictosFooter 
                        link={githubLinks}
                        img={Github}
                        text="Voir le code github: "
                    />
                </div>
            </div>
            
        </div>
    </div>
}