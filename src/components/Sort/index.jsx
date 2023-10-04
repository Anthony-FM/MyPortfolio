// CSS
import './index.css'
// hook
import { useSelector, useDispatch } from 'react-redux'
// Slice
import { selectMyslice } from '../../utils/redux/selector';
// Action
import { addProjects } from '../../feature/myPortefolioFeatures';
// components
import Options from '../Options';

export default function Sort({word}){
    const dispatch = useDispatch()
    const datas = useSelector(selectMyslice).datas
    const darkMode = useSelector(selectMyslice).darkMode
    const keywords = datas.Projects.studyProjects.map((project) => project.keywords)
    let keyword = []
    keywords.forEach(key => {
        keyword = keyword.concat(key)
    });
    const uniqueKeywords = [...new Set(keyword)]

    function sortByWords(word){
        if(word === "Tous les projets"){
            dispatch(addProjects(datas.Projects.studyProjects))
            return
        }
        const newData = datas.Projects.studyProjects.filter((project) => project.keywords.includes(word))
        dispatch(addProjects(newData))
        return
    }

    return <div className="select-container">
        <label htmlFor="trie" className={darkMode ? 'color-white' : "color-blue"}> Projets utilisants: </label>
        <select name="technique" id="trie" onChange={(e) => sortByWords(e.target.value)}>
            <option value="Tous les projets" >Tous les projets</option>
            {uniqueKeywords ? uniqueKeywords.map((keyword, index) => {
                return <Options 
                    value={keyword}                    
                    index={index*10}
                    key={index}
                    />
            }) : ""
            }

        </select>

    </div>
}