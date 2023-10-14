import "./index.css"
// hook
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef} from "react"
// slice
import { selectMyslice, selectObserver } from "../../utils/redux/selector"
// components
import LogoSkills from "../LogoSkills"
import AboutText from "../AboutText"
// Action
import { addObserverAbout, addObserverAboutDescription, addObserverAboutImg, addObserverSkills } from "../../feature/myIntersectionObserver"

// assets
import ME from "../../assets/me-left.jpg"
import MEdown from "../../assets/me-down.jpg"

import React from "../../assets/skills/react-white.svg"
import ReactBlack from "../../assets/skills/react-black.svg"
import ReactRouter from "../../assets/skills/react-router.svg"
import ReactRouterBlack from "../../assets/skills/react-router-black.svg"
import Javascript from "../../assets/skills/javascript-normal.svg"
import JavascriptBlack from "../../assets/skills/javascript-black.svg"
import Html from "../../assets/skills/html5.svg"
import HtmlBlack from "../../assets/skills/html5-black.svg"
import Css from "../../assets/skills/css3-normal.svg"
import CssBlack from "../../assets/skills/css3-black.svg"
import Sass from "../../assets/skills/sass.svg"
import SassBlack from "../../assets/skills/sass-black.svg"
import Redux from "../../assets/skills/redux.svg"
import ReduxBlack from "../../assets/skills/redux-black.svg"
import Jest from "../../assets/skills/jest.svg"
import JestBlack from "../../assets/skills/jest-black.svg"
import Bootstrap from "../../assets/skills/bootstrap.svg"
import BootstrapBlack from "../../assets/skills/bootstrap-black.svg"
import Github from "../../assets/skills/github.svg"
import GithubBlack from "../../assets/skills/github-black.svg"
import VSCode from "../../assets/skills/visual-studio-code.svg"
import VSCodeBlack from "../../assets/skills/visual-studio-code-black.svg"



export default function About({APropos}){
    //DarkMode
    const DarkMode = useSelector(selectMyslice).darkMode
    // MyRef
    const aboutRef = useRef()
    const aboutDescriptionRef = useRef()
    const aboutImgRef = useRef()
    const skillsRef = useRef()
    // state aboutRef
    const aboutDescriptionIsVisible = useSelector(selectObserver).aboutDescriptionIsVisible
    const aboutImgIsVisible = useSelector(selectObserver).aboutImgIsVisible
    const skillsIsVisible = useSelector(selectObserver).skillContainerIsVisible
    // dispatch
    const dispatch = useDispatch()
    //Ratio
    const aboutRatio = 0.5
    const aboutDescriptionRatio = 0.9
    const aboutImgRatio = 0.4
    // innerHeigth
    const yAboutInnerHeight = Math.round(window.innerHeight * aboutRatio)
    const yAboutDescriptionInnerHeight = Math.round(window.innerHeight * aboutDescriptionRatio)
    const yAboutImgInnerHeight = Math.round(window.innerHeight * aboutImgRatio)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const aboutEntry = entries[0]
                dispatch(addObserverAbout(aboutEntry.isIntersecting))
        },{
            rootMargin: `-${window.innerHeight - yAboutInnerHeight - 1}px 0px -${yAboutInnerHeight}px 0px`,
        })
        
            observer.observe(aboutRef.current)
    }, [dispatch, yAboutInnerHeight])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const aboutDescriptionEntry = entries[0]
            
            dispatch(addObserverAboutDescription(aboutDescriptionEntry.isIntersecting))
            
        },{
            threshold: 0.1,
            // rootMargin: `-${window.innerHeight - yAboutDescriptionInnerHeight  - 1}px 0px -${yAboutDescriptionInnerHeight }px 0px`,
        })
            observer.observe(aboutDescriptionRef.current)
    }, [dispatch, yAboutDescriptionInnerHeight ])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const aboutImgEntry = entries[0]
            
            dispatch(addObserverAboutImg(aboutImgEntry.isIntersecting))
            
        },{
            threshold: 0.1
        })
            observer.observe(aboutImgRef.current)
    }, [dispatch, yAboutImgInnerHeight ])
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const skillEntry = entries[0]
            
            dispatch(addObserverSkills(skillEntry.isIntersecting))
            
        },{
            threshold: 0.1
        })
            observer.observe(skillsRef.current)
    }, [dispatch, yAboutImgInnerHeight ])

    useEffect(() => {
        const options = {
         
          threshold: 0.5,
        };
    
        const callback = (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animation-appearFromRight');
              entry.target.classList.remove('animation-dissappearFromLeft');
            } else {
              entry.target.classList.add('animation-dissappearFromLeft');
              entry.target.classList.remove('animation-appearFromRight');
            }
          });
        };
    
        const observer = new IntersectionObserver(callback, options);
    
        const elementsToObserve = document.querySelectorAll('.about-Text');
    
        elementsToObserve.forEach((element) => {
          observer.observe(element);
        });
    
        
      }, []);  

      useEffect(() => {
        const options = {
         
          threshold: 0.5,
        };
    
        const callback = (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                console.log(index)
              entry.target.classList.add(`animation-appearFromDown`);
              entry.target.classList.add(`delay-${index}`);
              entry.target.classList.remove('animation-dissappearFromDown');
            } else {
                entry.target.classList.add('animation-dissappearFromDown');
                entry.target.classList.remove(`delay-${index}`);
              entry.target.classList.remove('animation-appearFromDown');
            }
          });
        };
    
        const observer = new IntersectionObserver(callback, options);
    
        const elementsToObserve = document.querySelectorAll('.skill-containerImg');
    
        elementsToObserve.forEach((element) => {
          observer.observe(element);
        });
    
        
      }, []);  

    return <section className={DarkMode ? "about backgroundColor-blue ": "about"} id="About" ref={aboutRef}>
        <h1 className={aboutImgIsVisible ? 
            (DarkMode ? "about-title color-white animation-appearFromUP" : "about-title color-blue animation-appearFromUP") 
            : 
            (DarkMode ? "about-title color-white animation-dissappearFromUP" : "about-title color-blue animation-dissappearFromUP")}>
                A Propos...
        </h1>
        <div className="about-container">
            <div className={ aboutDescriptionIsVisible? 
                (DarkMode ? "about-description color-white " : "about-description backgroundColor-blue ") 
                : 
                (DarkMode ? "about-description color-white " : "about-description backgroundColor-blue ")} 
                ref={aboutDescriptionRef}
            >
                {APropos.map((apropo, index) => {
                    return <AboutText 
                                apropo={apropo}
                                index={index} 
                                key={`${apropo}-${index}`}
                            />
                })}
            </div>
            <div 
               className={aboutImgIsVisible ? 
                (DarkMode ? "about-img animation-appearFromRight" : "about-img animation-appearFromRight") : "about-img animation-dissappearFromRight"}
                ref={aboutImgRef}
            >     
                <picture>
                    <source 
                        media="(max-width: 780px"
                        type="image/jpeg"
                        srcSet={`${MEdown} 780w`}
                        sizes="780px"
                    />    
                    <source 
                        media="(min-width: 780px"
                        type="image/jpeg"
                        srcSet={`${ME} 781w`}
                        sizes="781px"
                    />   
                    <img src={ME} alt="anthony fouda-many"/>
                </picture>          
                    

                
            </div>
        </div>
        <div className={skillsIsVisible? (DarkMode ? "containertitleAndSkills color-white backgroundColor-ligthBlack animation-appearFromDown" : "containertitleAndSkills color-blue animation-appearFromDown") : (DarkMode ? "containertitleAndSkills color-white backgroundColor-ligthBlack animation-dissappearFromDown" : "containertitleAndSkills color-blue animation-dissappearFromDown")}>

            <h2 className={skillsIsVisible? (DarkMode ? "skills-title color-white animation-appearFromUP" : "skills-title color-blue animation-appearFromUP") : (DarkMode ? "skills-title color-white  animation-dissappearFromUP" : "skills-title color-blue animation-dissappearFromUP")}>Mes Skills...</h2>
            <div className={DarkMode ? "skills-container " :"skills-container"} ref={skillsRef}>
                <LogoSkills 
                    src={DarkMode ?  React : ReactBlack} alt="React"
                />
                <LogoSkills 
                    src={DarkMode ?  Javascript : JavascriptBlack} alt="Javascript"
                />
                <LogoSkills 
                    src={DarkMode ?  Html : HtmlBlack} alt="HTML 5"
                />
                <LogoSkills 
                    src={DarkMode ?  Css : CssBlack} alt="CSS 3"
                />
                <LogoSkills 
                    src={DarkMode ?  Sass: SassBlack} alt="Sass"
                />
                <LogoSkills 
                    src={DarkMode ?  ReactRouter : ReactRouterBlack} alt="React Router"
                />
                <LogoSkills 
                    src={DarkMode ?  Redux : ReduxBlack} alt="Redux"
                />
                <LogoSkills 
                    src={DarkMode ?  Jest : JestBlack} alt="Jest"
                />
                <LogoSkills 
                    src={DarkMode ?  Bootstrap : BootstrapBlack} alt="Bootstrap"
                />
                <LogoSkills 
                    src={DarkMode ?  Github : GithubBlack} alt="Github"
                />
                <LogoSkills 
                    src={DarkMode ?  VSCode : VSCodeBlack} alt="Visual Studio Code"
                />
            </div>
        </div>
    </section>
}