import { useEffect } from "react";
import {  useSelector } from 'react-redux'
import store from "../redux/store";
import { addLoading, addError, addDatas, addProjects } from "../../feature/myPortefolioFeatures"
import { selectMyslice } from "../redux/selector";

/**
 * @typedef {Object} Get
 * @param {string} url 
 * @property {Object} datas
 * @returns {{Object}}
 */
export default function useFetch(url) {
    const dispatch = store.dispatch
    
    useEffect(() => {
    
        if (!url) return        
            dispatch(addLoading(true))       
        async function fetchData() {    
            try {            
                const response = await fetch(url)                
                const data = await response.json()                
                dispatch(addDatas(data))
                dispatch(addProjects(data.Projects.studyProjects))

            } catch (err) {            
                console.log('==== fetchData Catch Error ====', err)                
                dispatch(addError(true))            
            } finally {            
                dispatch(addLoading(false))            
            }        
        }        
        fetchData()

    }, [url, dispatch])
    const datas = useSelector(selectMyslice).datas
    const isLoading = useSelector(selectMyslice).isLoading
    const error = useSelector(selectMyslice).error
    return {datas, isLoading, error}
}