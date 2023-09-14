import "./index.css"
// hook
import { useSelector } from 'react-redux'
// slice
import { selectMyslice } from "../../utils/redux/selector"

export default function LogoSkills({src, alt}){
    const DarkMode = useSelector(selectMyslice).darkMode

    return <div className="skill-container">
            <img src={src} alt={alt} />
        </div>
}