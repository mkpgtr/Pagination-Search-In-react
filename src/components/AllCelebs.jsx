import React from 'react'
import { useGlobalContext } from '../context/AppContext'
import SingleCelebrity from './SingleCelebrity'
import SearchComponent from './SearchComponent'
import Pagination from './Pagination'

const AllCelebs = () => {

 
    const {state} =  useGlobalContext()
    const {celebrities,filteredCelebrities } = state


    if(filteredCelebrities.length > 0){
      return (
        <div>
          <SearchComponent />
          {
          filteredCelebrities?.map((user)=>{
                return <SingleCelebrity name={user.name} location={user.location} />          
            })
            }
            <Pagination />
            </div>
      )
    }
  return (
    <div>
      <SearchComponent/>
      
      {
        celebrities?.map((user)=>{
            return <SingleCelebrity name={user.name} location={user.location} />          
        })
        }
<Pagination />

        </div>
  )
}

export default AllCelebs