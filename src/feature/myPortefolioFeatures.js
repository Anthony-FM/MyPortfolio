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
    isBurgerOpen : false,
    nameOnClick: false,
    emailOnClick: false,
    textareaOnClick: false,
    nameOnChange : "",
    emailOnChange : "",
    textareaOnChange : "",
    submitDisabled : true,
    messageSend: false,
    openclassroomsProjetsIsOpen: false,
    openclassroomsProjets: [],
    myPersonalProjet: [],
    myPersonalProjetIsOpen: false
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
export const addNameOnClick = createAction(
    'add/onClickName',
    (nameOnClick) => ({
        payload : nameOnClick
    })
)
export const addEmailOnClick = createAction(
    'add/onClickEmail',
    (emailOnClick) => ({
        payload : emailOnClick
    })
)
export const addTextareaOnClick = createAction(
    'add/textareaOnClick',
    (textareaOnClick) => ({
        payload : textareaOnClick
    })
)
export const addNameOnChange = createAction(
    'add/nameOnChange',
    (nameOnChange) => ({
        payload : nameOnChange
    })
)
export const addEmailOnChange  = createAction(
    'add/emailOnChange ',
    (emailOnChange ) => ({
        payload : emailOnChange 
    })
)
export const addTextareaOnChange  = createAction(
    'add/textareaOnChange ',
    (textareaOnChange) => ({
        payload : textareaOnChange
    })
)
export const addSubmitDisabled  = createAction(
    'add/submitDisabled ',
    (submitDisabled) => ({
        payload : submitDisabled 
    })
)
export const addMessageSend  = createAction(
    'add/messageSend ',
    (messageSend) => ({
        payload : messageSend 
    })
)
export const toggleOpenclassroomsProjectsIsOpen  = createAction(
    'toggle/openclassroomsProjects ',
    (openclassroomsProjetsIsOpen) => ({
        payload : !openclassroomsProjetsIsOpen
    })
)
export const addOpenclassroomsProjects  = createAction(
    'add/openclassroomsProjects ',
    (openclassroomsProjets) => ({
        payload : openclassroomsProjets
    })
)
export const addMyPersonalProjet  = createAction(
    'add/myPersonalProjet ',
    (myPersonalProjet) => ({
        payload : myPersonalProjet
    })
)
export const toggleMyPersonalProjetIsOpen  = createAction(
    'toggle/MyPersonalProjet ',
    (myPersonalProjetIsOpen) => ({
        payload : !myPersonalProjetIsOpen
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
    .addCase(addNameOnClick, (draft, action) => {
        
        draft.nameOnClick = action.payload
        return
        
    })
    .addCase(addEmailOnClick, (draft, action) => {
        
        draft.emailOnClick = action.payload
        return
        
    })
    .addCase(addTextareaOnClick, (draft, action) => {
        
        draft.textareaOnClick = action.payload
        return
        
    })
    .addCase(addNameOnChange, (draft, action) => {
        
        draft.nameOnChange = action.payload
        return
        
    })
    .addCase(addEmailOnChange, (draft, action) => {
        
        draft.emailOnChange = action.payload
        return
        
    })
    .addCase(addTextareaOnChange, (draft, action) => {
        
        draft.textareaOnChange = action.payload
        return
        
    })
    .addCase(addSubmitDisabled, (draft, action) => {
        
        draft.submitDisabled = action.payload
        return
        
    })
    .addCase(addMessageSend, (draft, action) => {
        
        draft.messageSend = action.payload
        return
        
    })
    .addCase(toggleOpenclassroomsProjectsIsOpen, (draft) => {
        if(draft.openclassroomsProjetsIsOpen === true){
            draft.openclassroomsProjetsIsOpen = false
            return
        } else{
            draft.openclassroomsProjetsIsOpen = true
            return
        }
    })
    .addCase(addOpenclassroomsProjects, (draft, action) => {        
        draft.openclassroomsProjets = action.payload
        return        
    })
    .addCase(addMyPersonalProjet, (draft, action) => {        
        draft.myPersonalProjet = action.payload
        return        
    })
    .addCase(toggleMyPersonalProjetIsOpen, (draft) => {
        if(draft.myPersonalProjetIsOpen === true){
            draft.myPersonalProjetIsOpen = false
            return
        } else{
            draft.myPersonalProjetIsOpen = true
            return
        }
    })
)