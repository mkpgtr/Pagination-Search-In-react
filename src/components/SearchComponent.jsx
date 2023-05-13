import React, { useState } from 'react'
import { useGlobalContext } from '../context/AppContext'

const SearchComponent = () => {
  const {searchTerm,dispatch} = useGlobalContext()

  const handleChange = (e)=>{
    e.preventDefault()
    const newSearchTerm = event.target.value.trim().toLowerCase();
    dispatch({type:"FILTER_BY_SEARCH",payload:newSearchTerm})
  }
    
  return (
    <form>
        <input type="text" name="searchTerm" value={searchTerm} onChange={handleChange} />
    </form>
  )
}

export default SearchComponent