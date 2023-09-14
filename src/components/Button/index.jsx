import './index.css'
// hook
import { useSelector } from 'react-redux'
import { selectMyslice } from '../../utils/redux/selector'

export default function Button({text, img, imgName, link, download, target}){
    const darkMode = useSelector(selectMyslice).darkMode
    return <button  className={darkMode ? 'button backgroundColor-blue border-lightblue' : 'button backgroundColor-white border-lightblue'}>
        <a href={link} target={target}>
            <p className={ darkMode ? "button-text color-white" : "button-text color-blue"}>{text}</p>
            <img src={img} alt={imgName} className="button-picto" download={download} />
        </a>
    </button>
}