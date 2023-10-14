// CSS
import './index.css'
// IMG
import Hello from '../../assets/hello.png'
import CV from '../../assets/cv/cv-developpeur.pdf'
import BoxArrow from '../../assets/cv/box-arrow-up-right.svg'
import BoxArrowWhite from "../../assets/cv/box-arrow-up-right-white.svg"
import MyPicture from '../../assets/pictureOfMeBW.jpg'
import Github from '../../assets/skills/github.svg'
import GithubBlack from '../../assets/skills/github-black.svg'
import Linkedin from '../../assets/linkedin-black.png'
import LinkedinBlue from '../../assets/linkedin-blue.png'
// Action
import { addChangeStateOfisDeleting, 
    addDelta, 
    addTitleText, 
    addRemoveLoopNumber, } from '../../feature/myPortefolioFeatures';
import { addObserverHome } from '../../feature/myIntersectionObserver'
// 
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react';
// Selector
import { selectMyslice, selectObserver } from '../../utils/redux/selector';
// Components
import Button from '../Button';
import Pictos from '../Pictos';


export default function HomePage({titles, presentation, name}){
    // dispatch
    const dispatch = useDispatch()
    // data
    const mainTitle = useSelector(selectMyslice).titleText
    const isDeleting = useSelector(selectMyslice).isDeleting
    const loopNumber = useSelector(selectMyslice).loopNumberOfIndexArray
    const period = useSelector(selectMyslice).period
    const delta = useSelector(selectMyslice).deltaPeriod
    const titlesArray = titles
    // DarkMode
    const darkMode = useSelector(selectMyslice).darkMode
    // Intersection Observer
    const homeRef = useRef()
    const homeIsVisible = useSelector(selectObserver).homeIsVisible
    // Ratio
    const ratio = 0.1
    const y = Math.round(window.innerHeight * ratio)    

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
                dispatch(addObserverHome(entry.isIntersecting))            
        },{
            // rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
            threshold: 0.4
            
        })
        observer.observe(homeRef.current)
    }, [dispatch, y])



    useEffect(() => {
        function tick(){
            let i = loopNumber % titlesArray.length;
            let fullText = titlesArray[i]
            let upDatedText = isDeleting ? fullText.substring(0, mainTitle.length - 1) : fullText.substring(0, mainTitle.length + 1)
    
            dispatch(addTitleText(upDatedText));
    
            if (isDeleting) {
                dispatch(prevDelta => prevDelta /2)
            }
    
            if(!isDeleting && upDatedText === fullText) {
                // Pause avant de supprimer le texte
                setTimeout(() => {
                    dispatch(addChangeStateOfisDeleting(false))
                }, 1300)
                setTimeout(() => {
                    dispatch(addChangeStateOfisDeleting(true))
                    dispatch(addDelta(period))
                }, 1300)
            } else if(isDeleting && upDatedText.length === 1) {
                dispatch(addChangeStateOfisDeleting(false))
                dispatch(addRemoveLoopNumber(loopNumber + 1))
                dispatch(addDelta(100))
            }
        }
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)}
    },[delta, dispatch, isDeleting, loopNumber, mainTitle, period, titlesArray])

    
    
    return <section 
                className={ darkMode ? " backgroundColor-black " : ""} 
                id='Home'
                ref={homeRef}
            >
        <div className={ homeIsVisible === true ? "home-container animation-appearFromUP" : "home-container animation-dissappearFromUP" } >

            <div className="container">
                <div className="imgBis-container">
                    <div className="imgContainerBis">
                        <img src={MyPicture} alt="Anthony Fouda-Many" className='home-img-me'/>
                    </div>
                </div>
                <p className='home-first'>Hello <img src={Hello} className='home-img-hand' alt='hand saying hello'/> je m'appelle:</p>
                <h1 className={ darkMode ? "home-name color-white" : "home-name"}>{name}</h1>
                <h2 className="home-works"> Développeur d'application <br/>Javascript - React </h2> 
                <p className={darkMode ? "citation color-grey-light" : "citation color-lightBlue"}>{mainTitle}<span className={darkMode ? "barre backgroundColor-white" : "barre backgroundColor-black"}></span></p>
                <p className={darkMode ? "home-paragraphe color-white" : "home-paragraphe"}>{presentation} </p>
                <Button text="Mon CV" link={CV} img={darkMode ? BoxArrowWhite : BoxArrow} imgName="pdf-picto" target="_blank"/>

            </div>
            <div className="container">
                <div className="home-left-container">

                    <div className="imgContainer">
                        <img src={MyPicture} alt="Anthony Fouda-Many" className='home-img-me'/>
                    </div>
                    <div className="pictos-container">
                        <Pictos 
                            link="https://github.com/Anthony-FM"
                            img={darkMode ? Github: GithubBlack }
                            imgName="github link"
                            animation='true'
                        />
                        <Pictos 
                            link="https://www.linkedin.com/in/anthony-fouda-many/"
                            img={darkMode ? LinkedinBlue :Linkedin}
                            imgName="linkedin link"
                            animation='true'
                        />
                    </div>
                    

                </div>
        </div>

        </div>
    </section>
}
