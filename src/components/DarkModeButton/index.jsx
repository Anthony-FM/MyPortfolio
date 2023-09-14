//CSS
import './index.css'
// Hook
import { useSelector, useDispatch } from "react-redux";
//Action
import { addDarkMode } from "../../feature/myPortefolioFeatures";
// Slice
import { selectMyslice } from "../../utils/redux/selector";
// picto
import Moon from "../../assets/crescent-moon.png"
import Sun from "../../assets/sun.png"

export default function DarkModeButton(){
    const dispatch = useDispatch()
    const darkModeState = useSelector(selectMyslice).darkMode

    let link = darkModeState ? Sun : Moon
    let altImg = darkModeState ? "Moon picto" : "Sun picto"
    return <button className="darkmode-container" onClick={() => dispatch(addDarkMode())}>
       <img src={link} alt={altImg} className='darkmode-img' />
    </button>
}