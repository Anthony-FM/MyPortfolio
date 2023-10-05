import './index.css'
// hook
import { useSelector } from 'react-redux'
// Slice
import { selectMyslice } from '../../utils/redux/selector'

export default function Error404(){
    const darkMode = useSelector(selectMyslice).darkMode

    return <section className={darkMode ? ("error-container backgroundColor-black") : ("error-container")}>
        <h1 className={darkMode ? ("error-title color-white") : ("error-title")}>Erreur 404</h1>
        <p className={ darkMode ? ("error-text color-white") : ("error-text")}>Désolé mauvais endroit...Oops!</p>
    </section>
}