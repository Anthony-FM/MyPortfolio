import './index.css'
// hook
import { useDispatch, useSelector } from 'react-redux'
// selector
import { selectMyslice } from '../../utils/redux/selector'
import { addisBurgerOpen } from '../../feature/myPortefolioFeatures'

export default function BurgerMenu(){
    const dispatch = useDispatch()
    const isBurgerOpen = useSelector(selectMyslice).isBurgerOpen
    return <div className="burgerMenu-container" onClick={() => dispatch(addisBurgerOpen())}>

            <div className={isBurgerOpen ? "burger-top bun-move-down" : "burger-top"}></div>
            <div className={isBurgerOpen ? "" : "burger-middle"}></div>
            <div className={isBurgerOpen ? "burger-bottom bun-move-up" : "burger-bottom"}></div>
        </div>
}