import { createContext, useReducer } from 'react';

const PagesContext = createContext()

const pagesReducer = (state,action) => {
    switch(action.type){
        case 'SET_PAGES':
            return { pages: [action.payload]}

        default:
            return state
    }
}

const PagesContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(pagesReducer, {
        pages:null
    })

    return (
        <PagesContext.Provider value={{...state,dispatch}}>
            {children}
        </PagesContext.Provider>
    )
}

export {PagesContextProvider, PagesContext}