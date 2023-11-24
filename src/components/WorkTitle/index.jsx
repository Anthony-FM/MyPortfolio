import { useState, useEffect } from "react"

import { useSelector } from "react-redux"

import { selectMyslice } from "../../utils/redux/selector"

export default function WorkTitle(){
    
    // data
    // const mainTitle = useSelector(selectMyslice).titleText
    const [mainTitle, setMainTitle] = useState('')
    // const isDeleting = useSelector(selectMyslice).isDeleting
    const [ isDeleting, setIsDeleting] = useState(false)
    // const loopNumber = useSelector(selectMyslice).loopNumberOfIndexArray
    const [ loopNumber, setLoopNumber] = useState(0)
    // const period = useSelector(selectMyslice).period
    const period = 80
    // const delta = useSelector(selectMyslice).deltaPeriod
    const [ delta, setDelta] = useState(500 - Math.random() * 800)
    const titlesArray = useSelector(selectMyslice).datas.Presentation.title
    // DarkMode
    const darkMode = useSelector(selectMyslice).darkMode

    useEffect(() => {
        function tick(){
            let i = loopNumber % titlesArray.length;
            let fullText = titlesArray[i]
            let upDatedText = isDeleting ? fullText.substring(0, mainTitle.length - 1) : fullText.substring(0, mainTitle.length + 1)
    
            setMainTitle(upDatedText);
            
            //
            if (isDeleting) {
                setDelta(prevDelta => prevDelta /2)
            }
            // Dès que le texte est entier, on fait une pause avant de supprimer
            if(!isDeleting && upDatedText === fullText) {
                // Pause avant de supprimer le texte 
                setTimeout(() =>{
                    setIsDeleting(true)
                    setDelta(period)

                }, 1000)
                // Pendant le suppression du texte, dès que la taille du mot arrive à un,
                // on change l'état, on change de mot et de periode    
            } else if(isDeleting && upDatedText.length === 1) {
                setTimeout(() => {
                    setIsDeleting(false)
                    setLoopNumber(loopNumber + 1)
                    setDelta(140)
                }, 1000)
            }
        }
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) }
    },[delta, isDeleting, loopNumber, mainTitle, period, titlesArray])

    return  <p className={darkMode ? "citation color-grey-light" : "citation color-lightBlue"}>{mainTitle}<span className={darkMode ? "barre backgroundColor-white" : "barre backgroundColor-black"}></span></p>

}