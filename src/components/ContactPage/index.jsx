import "./index.css"  
// Hooks
import { useRef, useEffect } from "react"  
import { useDispatch, useSelector } from "react-redux"
// Action
import {addObserverContact} from '../../feature/myIntersectionObserver'
import { 
    addNameOnClick, 
    addEmailOnClick, 
    addTextareaOnClick, 
    addEmailOnChange, 
    addNameOnChange,
    addSubmitDisabled,
    addMessageSend,
    addTextareaOnChange
 } from "../../feature/myPortefolioFeatures"
// Selector
import { selectMyslice, selectObserver } from "../../utils/redux/selector"
// 
import emailjs from 'emailjs-com'
// Assets
import ContactImg from '../../assets/contact-img.svg'

export default function Contact(){
    // dispatch
    const dispatch = useDispatch()
    // ref
    const contactRef = useRef()
    // State
    const contactIsVisible = useSelector(selectObserver).contactIsVisible
    const darkMode = useSelector(selectMyslice).darkMode
    const nameOnClick = useSelector(selectMyslice).nameOnClick
    const emailOnClick = useSelector(selectMyslice).emailOnClick
    const textareaOnClick = useSelector(selectMyslice).textareaOnClick
    const name = useSelector(selectMyslice).nameOnChange
    const email = useSelector(selectMyslice).emailOnChange
    const textarea = useSelector(selectMyslice).textareaOnChange
    const disabledSubmit = useSelector(selectMyslice).submitDisabled
    const messageSend = useSelector(selectMyslice).messageSend

    const regExName = /[a-zA-Z]+[a-zA-Z-]/g
    const regExEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})/g
    
    let nameError = name.match(regExName) ? "" : "Veuillez entrer un nom ou prénom valable... s'il vous plaît! 😄"
    let emailError = email.match(regExEmail) ? "" : "Veuillez entrer un email valable... s'il vous plaît! 😄"

    
    useEffect(() => {
        const regExName = /[a-zA-Z]+[a-zA-Z-]/g
        const regExEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})/g
    
        if(name.match(regExName) && email.match(regExEmail)){
            dispatch(addSubmitDisabled(false))
            return
        }
        dispatch(addSubmitDisabled(true))
        return
    }, [dispatch, name, email])
    function sendEmail(e){
        e.preventDefault()

        emailjs.sendForm(
            'service_42u9z2h', 
            'template_5awtzcw', 
            e.target,
            'qlU48O8YbJQPhp3Nk'
            ).then(res => {
                console.log(res)
                dispatch(addMessageSend(true))
                setTimeout(() => {

                    dispatch(addMessageSend(false))
                }, 5000)
                dispatch(addEmailOnChange(""))
                dispatch(addNameOnChange(""))
                dispatch(addTextareaOnChange(""))
                dispatch(addNameOnClick(false))
                dispatch(addEmailOnClick(false))
                dispatch(addTextareaOnClick(false))
            }).catch(err => console.log(err), dispatch(addMessageSend(false)))
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const contactEntry = entries[0]
            
            dispatch(addObserverContact(contactEntry.isIntersecting))
            
        },{
            threshold: 0.1
        })
            observer.observe(contactRef.current)
    }, [dispatch])

    return <section className={darkMode ? "contact-container backgroundColor-black" : "contact-container backgroundColor-blue"} id="contact" ref={contactRef}>
        <h1 className={contactIsVisible ? 
            (darkMode ? "contact-title color-blue animation-appearFromUP" : "contact-title color-white animation-appearFromUP") 
            : 
            (darkMode ? "contact-title color-blue animation-dissappearFromUP" : "contact-title color-white animation-dissappearFromUP")}>
                Contactez-Moi!
        </h1>
        <div className="form-container">
            <div className="form-imgContainer">
                <img src={ContactImg} alt="contact sharing"/>
            </div>
            <form 
                className={darkMode ? "contact-form backgroundColor-lightBlue border-white" : "contact-form backgroundColor-lightBlack"}
                onSubmit={sendEmail}
            >   
                <div className={messageSend ? (darkMode ? "messageSend backgroundColor-blue color-white" : "messageSend backgroundColor-white color-blue") : "none"}>Merci pour votre Message !</div>
                <div className="input-container" onClick={() => dispatch(addNameOnClick(true))}>
                    <label htmlFor="name" className={ darkMode ? "form-label color-black" : "form-label color-white"}>Votre Nom et/ou Prénom</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        required 
                        className={nameOnClick ? (darkMode ? "form-input input-open" : "form-input input-open color-white") : (darkMode ? "form-input" : "form-input color-white")}
                        value={name} 
                        onChange={(e)=> dispatch(addNameOnChange(e.target.value))}
                    />
                    <div className={ darkMode ? "input-borderBottom " : "input-borderBottom"}></div>
                </div>
                <div className={ darkMode ? "errorInput color-red" : "errorInput color-red"}>{nameError}</div>

                <div className="input-container" onClick={() => dispatch(addEmailOnClick(true))}>
                    <label htmlFor="email" className={ darkMode ? "form-label color-black" : "form-label color-white"}>Votre Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required 
                        className={emailOnClick ? (darkMode ? "form-input input-open" : "form-input input-open color-white") : (darkMode ? "form-input" : "form-input color-white")}
                        value={email} 
                        onChange={(e)=> dispatch(addEmailOnChange(e.target.value))}
                    />
                    <div className={ darkMode ? "input-borderBottom " : "input-borderBottom"}></div>
                </div>
                <div className={ darkMode ? "errorInput color-red" : "errorInput color-red"}>{emailError}</div>

                <div className="input-container" onClick={() => dispatch(addTextareaOnClick(true))}>
                    <label htmlFor="message" className={ darkMode ? "form-label color-black" : "form-label color-white"}>Votre Message</label>
                    <textarea 
                        type="text" 
                        name="message" 
                        id="message" 
                        required 
                        rows={6} 
                        className={ textareaOnClick ? (darkMode ? "form-textarea input-open" : "form-textarea input-open color-white") : ( darkMode ? "form-textarea" :"form-textarea")}
                        value={textarea}
                        onChange={(e) => dispatch(addTextareaOnChange(e.target.value))}
                    />
                    <div className={ darkMode ? "input-borderBottom " : "input-borderBottom"}></div>
                </div>

                <input 
                    type="submit" 
                    value="Envoyer" 
                    disabled={disabledSubmit}
                    className={darkMode ? 'form-button backgroundColor-ligthBlack border-lightBlue color-white' : 'form-button backgroundColor-white border-lightBlue'}
                />
            </form>
        </div>
    </section>
}