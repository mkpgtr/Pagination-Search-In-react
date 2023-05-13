import axios from 'axios'


const getAllCelebrities = async()=>{
    const response = await axios.get('http://localhost:5000/users')

    return response
}

const postCelebrity = async(formData)=>{
    const response = await axios.post('http://localhost:5000/users/',formData)
    return response
}

const deleteCelebrity = async()=>{
    
}

export {getAllCelebrities,postCelebrity}