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
import UserList from './UserList';
import UserDetail from './UserDetail';


function App() {

  return (
    <>
      {/* <Navbar /> */}

      <Routes>

        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />

          <Route path='in'>
            <Route path='/in/user'>
              <Route path="/in/user/about" element={<About />} />
              <Route path='/in/user/login' element={<Login />} />
            </Route>
          </Route>



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