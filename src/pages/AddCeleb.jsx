import React, { useState } from 'react'
import { postCelebrity } from '../api-calls/api-calls'
import { useGlobalContext } from '../context/AppContext'
const defaultState = {
    name:'',
    location:''
}
const AddCeleb = () => {
    const [celeb,setCeleb] = useState(defaultState)
    const {state,dispatch} = useGlobalContext()

    console.log(state.celebrities)
    const handleChange = (e)=>{
        setCeleb({...celeb,[e.target.name]:e.target.value})
    }


    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(celeb)

        const response = await postCelebrity(celeb)

        console.log(response)
        console.log('user',response.data.user)
        if(response.status===201){

            dispatch({type:"ADD_CELEBRITY",payload:response.data.user})
        }
    }
  return (
    <div>

    <form onSubmit={handleSubmit}>

        <input type="text" name="name" onChange={handleChange}/>
        <input type="text" name="location" onChange={handleChange}/>
        <button>Add Celeb</button>
    </form>


    <div>
        {state?.celebrities?.map((user)=>{
            return <li>{user.name}</li>
        })}
    </div>
    </div>
  )
}

export default AddCeleb