import './index.css'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectMyslice } from '../../utils/redux/selector'
import { addObserverAboutText } from '../../feature/myIntersectionObserver'

export default function AboutText({apropo, index}){
    // dispatch
    const dispatch = useDispatch()
    // State
    const DarkMode = useSelector(selectMyslice).darkmode
    let aboutTextRef = useRef()

    //
    const aboutTextRatio = 0.5

    const yAboutTextInnerHeight = Math.round(window.innerHeight * aboutTextRatio)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const aboutTextEntry = entries[0].isIntersecting
            dispatch(addObserverAboutText(aboutTextEntry))            
        },{
          
        threshold: 0.01
        })
            observer.observe(aboutTextRef.current)
    }, [dispatch, yAboutTextInnerHeight])
    return <p 
                className={DarkMode ? "about-Text color-white animation-appearFromRight" : "about-Text color-white animation-appearFromRight" }
                
                ref={aboutTextRef}>{apropo}
            </p>
}