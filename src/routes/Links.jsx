import { Route, Routes } from 'react-router-dom'
// page / component imports
import Home from '../components/pages/Home'
import SingleArticle from '../components/pages/SingleArticle'


const Links = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/singlearticle' element={<SingleArticle/>}/>
    </Routes>
  )
}

export default Links