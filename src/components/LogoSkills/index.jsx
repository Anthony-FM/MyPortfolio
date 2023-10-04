import "./index.css"
// hook
import { useSelector } from 'react-redux'
// slice
import { selectMyslice } from "../../utils/redux/selector"

export default function LogoSkills({src, alt}){
    const DarkMode = useSelector(selectMyslice).darkMode

    return <div className="skill-container" >
        <div className="skill-containerImg">
            <img src={src} alt={alt} />
            <h3 className={DarkMode ? "skill color-white" : "skill"}>{alt}</h3>
        </div>
        </div>
}