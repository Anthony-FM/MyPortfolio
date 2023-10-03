import { createAction, createReducer } from '@reduxjs/toolkit'

// State initiale

const initialeState = {
    homeIsVisible : true,
    aboutIsVisible : false,
    aboutDescriptionIsVisible : false,
    aboutImgIsVisible : false,
    aboutTextIsVisible : false,
    skillContainerIsVisible : false,
    portfolioIsVisible : false,
    contactIsVisible : false,
}

// Actions
export const addObserverHome = createAction(
    'addObserver/home',
    (homeIsVisible) => ({
        payload : homeIsVisible
    })
)
export const addObserverAbout = createAction(
    'addObserver/about',
    (aboutIsVisible) => ({
        payload : aboutIsVisible
    })
)
export const addObserverAboutDescription = createAction(
    'addObserver/aboutDescription',
    (aboutDescriptionIsVisible) => ({
        payload : aboutDescriptionIsVisible
    })
)
export const addObserverAboutText = createAction(
    'addObserver/aboutText',
    (aboutTextIsVisible) => ({
        payload : aboutTextIsVisible
    })
)

export const addObserverAboutImg = createAction(
    'addObserver/aboutImg',
    (aboutImgIsVisible) => ({
        payload : aboutImgIsVisible
    })
)
export const addObserverSkills = createAction(
    'addObserver/aboutSkills',
    (skillContainerIsVisible) => ({
        payload : skillContainerIsVisible
    })
)
export const addObserverPortfolio = createAction(
    'addObserver/portfolio',
    (portfolioIsVisible ) => ({
        payload : portfolioIsVisible 
    })
)
export const addObserverCard = createAction(
    'addObserver/card',
    (cardIsVisible ) => ({
        payload : cardIsVisible 
    })
)
export const addObserverContact = createAction(
    'addObserver/contact',
    (contactIsVisible ) => ({
        payload : contactIsVisible 
    })
)

// Reducer 

export default createReducer(initialeState, (builder) => 
    builder
    .addCase(addObserverHome, (draft, action) => {        
        draft.homeIsVisible = action.payload
        return
    })
    .addCase(addObserverAbout, (draft, action) => {        
        draft.aboutIsVisible = action.payload
        return
    })
    .addCase(addObserverAboutDescription, (draft, action) => {        
        draft.aboutDescriptionIsVisible = action.payload
        return
    })
    .addCase(addObserverAboutText, (draft, action) => {        
        draft.aboutTextIsVisible = action.payload
        return
    })
    .addCase(addObserverAboutImg, (draft, action) => {        
        draft.aboutImgIsVisible = action.payload
        return
    })
    .addCase(addObserverSkills, (draft, action) => {        
        draft.skillContainerIsVisible = action.payload
        return
    })
    .addCase(addObserverPortfolio, (draft, action) => {        
        draft.portfolioIsVisible = action.payload
        return
    })
    .addCase(addObserverCard, (draft, action) => {        
        draft.cardIsVisible= action.payload
        return
    })
    .addCase(addObserverContact, (draft, action) => {        
        draft.contactIsVisible= action.payload
        return
    })
)