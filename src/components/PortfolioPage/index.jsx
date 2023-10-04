//CSS
import './index.css'
// hook
import { useSelector, useDispatch} from 'react-redux'
import { useEffect, useRef } from 'react';
// Slice
import { selectMyslice, selectObserver } from '../../utils/redux/selector';
// Components
import Cards from '../Cards';
import Sort from '../Sort';
// Action
import { addObserverPortfolio } from '../../feature/myIntersectionObserver';

export default function PortefolioPage(){
    const datasProject = useSelector(selectMyslice).projects    
    const title = useSelector(selectMyslice).datas.Projects.title
    const studyProjects = datasProject
    const darkMode = useSelector(selectMyslice).darkMode    

    // Dispatch
    const dispatch = useDispatch()
    // Ref
    const portfolioRef = useRef(null)
    // State
    const portfolioIsVisible = useSelector(selectObserver).portfolioIsVisible
    // Ratio
    const ratio = 0.1
    const y = Math.round(window.innerHeight * ratio)    

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            dispatch(addObserverPortfolio(entry.isIntersecting))            
        },{
            // rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
            threshold: 0.01
            
        })
        observer.observe(portfolioRef.current)
    }, [dispatch, y])

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
    
        const elementsToObserve = document.querySelectorAll('.card');
    
        elementsToObserve.forEach((element) => {
          observer.observe(element);
        });
    
        
      }, []);    

    return <section className={ darkMode ? 'portfolio backgroundColor-black' : 'portfolio'} id='portfolio' ref={portfolioRef}>
        <h1 className={ portfolioIsVisible ? ( darkMode ? "portfolio-title color-white animation-appearFromUP" : "portfolio-title color-blue animation-appearFromUP") : ( darkMode ? "portfolio-title color-white animation-dissappearFromUP" : "portfolio-title color-blue animation-dissappearFromUP")}>Portfolio...</h1>
        
        <h2 className={portfolioIsVisible ? (darkMode ? "portfolio-titleSection color-white animation-appearFromLeft" : "portfolio-titleSection animation-appearFromLeft") : (darkMode ? "portfolio-titleSection color-white animation-dissappearFromLeft" : "portfolio-titleSection animation-dissappearFromLeft")}>
            <span className="block-left border-color-blue"></span>
            {title}
            <span className="block-right border-color-blue"></span>
        </h2>
        <Sort/>

        <div className="cards-container">
            {studyProjects ? studyProjects.map((projet, index) => {
            return <Cards
                    picture={projet.picture}
                    keywords={projet.keywords}
                    index={index}
                    githubLinks={projet.githubLinks}
                    link={projet.link}
                    projectName={projet.projectName}
                    description={projet.description}
                    key={`${index}-${projet.projectName}`}
                    />
            }) : ""}
        </div>
        
    </section>
        
}