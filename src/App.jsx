import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllCelebs from './components/AllCelebs'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddCeleb from './pages/AddCeleb'
import SearchComponent from './components/SearchComponent'
import Pagination from './components/Pagination'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    
    <Routes>
<Route path='/' element={<><SearchComponent/><Pagination /></>}/>
<Route path='/add-celeb' element={<AddCeleb />}/>
 
    </Routes>
    </BrowserRouter>
  )
}

export default App
