import { Navigate, Route, Routes } from 'react-router'
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';
import PageNotFound from './PageNotFound';
import College from './College';
import Department from './Department';
import Details from './Details';
import Student from './Student';


function App() {

  return (
    <>
      {/* <Navbar /> */}

      <Routes>

        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Login />} />
        </Route>


        <Route path='/college' element={<College />}>
          <Route index element={<Student />} />
          <Route path='department' element={<Department />} />
          <Route path='details' element={<Details />} />
        </Route>
        <Route path='/*' element={<PageNotFound />} />
        {/* <Route path='/*' element={<Navigate to="/about" />} /> */}
      </Routes>
    </>
  )
}

export default App;