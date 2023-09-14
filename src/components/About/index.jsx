import "./index.css"
// hook
import { useSelector } from 'react-redux'
// slice
import { selectMyslice } from "../../utils/redux/selector"
// components
import LogoSkills from "../LogoSkills"
// assets
import ME from "../../assets/me.jpg"

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
    const DarkMode = useSelector(selectMyslice).darkMode
    
    return <section className={DarkMode ? "about backgroundColor-blue": "about"}>
        <h1 className={DarkMode ? "about-title color-white" : "about-title color-blue"}>A Propos</h1>
        <div className="about-container">
            <div className={DarkMode ? "about-description color-white" : "about-description"}>{APropos}</div>
            <div className="about-img">
                <img src={ME} alt="me" />
            </div>
        </div>
        <h2 className={ DarkMode ? "skills-title color-white" : "skills-title color-blue"}>Skills</h2>
        <div className="skills-container">
            <LogoSkills 
                src={DarkMode ?  React : ReactBlack} alt="React"
            />
            <LogoSkills 
                src={DarkMode ?  Javascript : JavascriptBlack} alt="React"
            />
            <LogoSkills 
                src={DarkMode ?  Html : HtmlBlack} alt="React"
            />
            <LogoSkills 
                src={DarkMode ?  Css : CssBlack} alt="React"
            />
            <LogoSkills 
                src={DarkMode ?  Sass: SassBlack} alt="React"
            />
            <LogoSkills 
                src={DarkMode ?  ReactRouter : ReactRouterBlack} alt="React"
            />
            <LogoSkills 
                src={DarkMode ?  Redux : ReduxBlack} alt="React"
            />
            <LogoSkills 
                src={DarkMode ?  Jest : JestBlack} alt="React"
            />
            <LogoSkills 
                src={DarkMode ?  Bootstrap : BootstrapBlack} alt="React"
            />
            <LogoSkills 
                src={DarkMode ?  Github : GithubBlack} alt="React"
            />
            <LogoSkills 
                src={DarkMode ?  VSCode : VSCodeBlack} alt="React"
            />
        </div>
    </section>
}