//CSS
import './index.css'
// hook
import { useSelector } from 'react-redux'
// Slice
import { selectMyslice } from '../../utils/redux/selector';

export default function Keywords({keyword, index, projectName}){
    const darkMode = useSelector(selectMyslice).darkMode
    return <div 
    className={darkMode ? "keyword-container backgroundColor-white color-blue" : "keyword-container backgroundColor-blue color-white"} 
    key={`${projectName}-${keyword}-${index}`}>{keyword}</div>
}