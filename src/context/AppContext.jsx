import React, { useState, useContext, useReducer, useEffect } from 'react'
import reducer from './reducers'
import { getAllCelebrities } from '../api-calls/api-calls'

const AppContext = React.createContext()

const initialState = {
    celebrities : [],
    filteredCelebrities : [],
    searchTerm :''
}

const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState)


    const fetchData = async()=>{
        const response = await getAllCelebrities()
        dispatch({type:"SET_CELEBRITIES",payload:response.data.users})
        console.log(response)
    }
    useEffect(()=>{
        fetchData()
    },[])



    return (
        <AppContext.Provider value ={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}