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
// Motion
import { easeInOut, motion } from 'framer-motion';
// import { delay } from '@reduxjs/toolkit/dist/utils';

export default function DarkModeButton(){
    const dispatch = useDispatch()
    const darkModeState = useSelector(selectMyslice).darkMode

    let link = darkModeState ? Sun : Moon
    let altImg = darkModeState ? "Moon picto" : "Sun picto"
    return <motion.button 
        className="darkmode-container" 
        onClick={() => dispatch(addDarkMode())}
        transition={{
            duration: 2,
            ease: easeInOut,
            scale: {
                type: "spring",
                damping: 5,
                stiffness: 180,
                restDelta: 0.1
              },
            repeat: Infinity,
            repeatDelay: 0
            }}
        whileHover={{scale: 1.2}}
        whileTap={{scale: 0.8}}
        // initial={{ rotate: 0}}
        animate={{
            rotate: [-5, 5, -5]
        }}
    >
       <img src={link} alt={altImg} className='darkmode-img' />
    </motion.button>
}