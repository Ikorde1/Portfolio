import Navbar from '../src/component/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import { Route,Routes,} from 'react-router-dom'

export default function App(){

  return(<div>
  <Navbar/>
  <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Blogs" element={<Blogs/>} />
  </Routes>
  
  </div>)
}
