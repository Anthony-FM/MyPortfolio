import './index.css'
// hook
import { useDispatch, useSelector } from 'react-redux'
// selector
import { selectMyslice } from '../../utils/redux/selector'
import { addisBurgerOpen } from '../../feature/myPortefolioFeatures'

export default function BurgerMenu(){
    const dispatch = useDispatch()
    const isBurgerOpen = useSelector(selectMyslice).isBurgerOpen
    const DarkMode = useSelector(selectMyslice).darkMode
    return <div className={ isBurgerOpen ? "burgerMenu-container burger-left" : "burgerMenu-container"} onClick={() => dispatch(addisBurgerOpen())}>

            <div className={DarkMode ? (isBurgerOpen ? "burger-top backgroundColor-white bun-move-down" : "burger-top backgroundColor-white") : (isBurgerOpen ? "burger-top backgroundColor-blue bun-move-down" : "burger-top backgroundColor-blue")}></div>
            <div className={DarkMode ? (isBurgerOpen ? "" : "burger-middle backgroundColor-white") : (isBurgerOpen ? "" : "burger-middle backgroundColor-blue")}></div>
            <div className={DarkMode ? (isBurgerOpen ? "burger-bottom backgroundColor-white bun-move-up" : "burger-bottom backgroundColor-white") : (isBurgerOpen ? "burger-bottom backgroundColor-blue bun-move-up" : "burger-bottom backgroundColor-blue")}></div>
        </div>
}