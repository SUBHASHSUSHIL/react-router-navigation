import { Route, Routes } from 'react-router'
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';


function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login /> } />
      </Routes>
    </>
  )
}

export default App;