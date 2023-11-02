// CSS
import './index.css'
// hook
import { useSelector, useDispatch } from 'react-redux'
// Slice
import { selectMyslice } from '../../utils/redux/selector';
// Action
import { addOpenclassroomsProjects } from '../../feature/myPortefolioFeatures';
// components
import Options from '../Options';

export default function Sort({index}){
    const dispatch = useDispatch()
    const projectsArray = useSelector(selectMyslice).datas.Projects[index].studyProjects
    const darkMode = useSelector(selectMyslice).darkMode
    const keywords = projectsArray.map((project) => project.keywords)
    let keyword = []
    keywords.forEach(key => {
        keyword = keyword.concat(key)
    });
    const uniqueKeywords = [...new Set(keyword)]

    function sortByWords(word){
        if(word === "Tous les projets"){
            dispatch(addOpenclassroomsProjects(projectsArray))
            return
        }        
        const openclassroomsProjects = projectsArray.filter((projects) => projects.keywords.includes(word))
        dispatch(addOpenclassroomsProjects(openclassroomsProjects))
        return
    }

    return <div className="select-container">
        <label htmlFor="trie" className={darkMode ? 'color-white' : "color-blue"}> Projets utilisants: </label>
        <select name="technique" id="trie" onChange={(e) => sortByWords(e.target.value)}>
            <option value="Tous les projets" defaultValue="React">Tous les projets</option>
            {uniqueKeywords ? uniqueKeywords.map((keyword, index) => {
                return <Options 
                    value={keyword}                    
                    index={index*10}
                    key={index}
                    />
                }) 
                : ""
            }

        </select>

    </div>
}