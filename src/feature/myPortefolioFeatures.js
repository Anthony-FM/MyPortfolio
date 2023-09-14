import { createAction, createReducer } from '@reduxjs/toolkit'

// State initiale

const initialeState = {
    datas : [],
    isLoading: true,
    error : false,
    errorMessage : '',
    loopNumberOfIndexArray : 0,
    isDeleting : false,
    titleText : '',
    deltaPeriod : 500 - Math.random() * 800,
    period : 80,
    darkMode : false,
    isBurgerOpen : false
}

// Actions
export const addDatas = createAction(
    'add/datas',
    (datas) => ({
        payload : datas
    })
)

export const addLoading = createAction(
    'add/loading',
    (isLoading) => ({
        payload : isLoading
    })
)

export const addError = createAction(
    'add/error',
    (error) => ({
        payload : error
    })
)

export const addErrorMessage = createAction(
    'add/messageError',
    (errorMessage) => ({
        payload : errorMessage
    })
)

export const addRemoveLoopNumber = createAction(
    'add/LoopNumber',
    (loopNumberOfIndexArray) => ({
        payload : loopNumberOfIndexArray
    })
)

export const addChangeStateOfisDeleting = createAction(
    'remove/isDeleting',
    (isDeleting) => ({
        payload : isDeleting
    })
)

export const addTitleText = createAction(
    'add/titleText',
    (titleText) => ({
        payload : titleText
    })
)
export const addDelta = createAction(
    'add/deltaPeriod',
    (deltaPeriod) => ({
        payload : deltaPeriod
    })
)
export const addPeriod = createAction(
    'add/pPeriod',
    (period) => ({
        payload : period
    })
)

export const addDarkMode = createAction(
    'add/darkmode',
    (darkMode) => ({
        payload : !darkMode
    })
)

export const addisBurgerOpen = createAction(
    'add/burgerState',
    (isBurgerOpen) => ({
        payload : !isBurgerOpen
    })
)
// Reducer 

export default createReducer(initialeState, (builder) => 
    builder
    .addCase(addDatas, (draft, action) => {
        
        draft.datas = action.payload
        return
    })
    .addCase(addLoading, (draft, action) => {
        
        draft.isLoading = action.payload
        return
    })
    .addCase(addError, (draft, action) => {
        
        draft.error = action.payload
        return
    })    
    .addCase(addErrorMessage, (draft, action) => {
        
        draft.errorMessage = action.payload
        return
    })
    .addCase(addChangeStateOfisDeleting, (draft, action) => {
        
        draft.isDeleting = action.payload
        return
    })
    
    .addCase(addRemoveLoopNumber, (draft, action) => {
        
        draft.loopNumberOfIndexArray = action.payload
        return
    })
    .addCase(addTitleText, (draft, action) => {
        
        draft.titleText = action.payload
        return
    })
    .addCase(addDelta, (draft, action) => {
        
        draft.deltaPeriod = action.payload
        return
    })
    .addCase(addPeriod, (draft, action) => {
        
        draft.period = action.payload
        return
    })


    .addCase(addDarkMode, (draft) => {
        if(draft.darkMode === true){
            draft.darkMode = false
            return
        } else{
            draft.darkMode = true
            return
        }
    })
    .addCase(addisBurgerOpen, (draft) => {
        if(draft.isBurgerOpen === true){
            draft.isBurgerOpen = false
            return
        } else{
            draft.isBurgerOpen = true
            return
        }
    })
)