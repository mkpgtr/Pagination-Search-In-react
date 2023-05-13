import { getAllCelebrities } from "../api-calls/api-calls"

const reducer =  (state,action)=>{
    if(action.type==='SET_CELEBRITIES'){
        
       
        return {...state,celebrities:action.payload}

    }
    if(action.type==='ADD_CELEBRITY'){
        
       console.log(action.payload)
       console.log(state)
        return {...state,celebrities:[...state.celebrities,action.payload]}

    }
    if (action.type === 'FILTER_BY_SEARCH') {
        console.log(action.payload)
        const filteredCelebrities = state.celebrities.filter((celeb) =>
          celeb.name.toLowerCase().includes(action.payload.toLowerCase())
        );
        console.log(filteredCelebrities); // log the filtered results to the console
        return { ...state, searchTerm:action.payload, filteredCelebrities: filteredCelebrities }; // return the updated state with the filtered results
      }


    throw new Error('no matching action type')
}

export default reducer