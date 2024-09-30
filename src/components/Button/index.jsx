import './index.css'
// hook
import { useSelector } from 'react-redux'
import { selectMyslice } from '../../utils/redux/selector'

export default function Button({text, img, imgName, link, download, target}){
    const darkMode = useSelector(selectMyslice).darkMode
    return <button  className={`button border-lightBlue ${darkMode ? "backgroundColor-blue" : "backgroundColor-white"}` }>
        <a href={link} target={target}>
            <p className={ darkMode ? "button-text color-white" : "button-text color-blue"}>{text}</p>
            <img src={img} alt={imgName} className="button-picto" download={download} />
        </a>
    </button>
}