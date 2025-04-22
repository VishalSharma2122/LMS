import React from 'react'
import { Route,Routes, useMatch } from 'react-router-dom'
import Home from './Pages/Student/Home'
import CoursesList from './Pages/Student/CoursesList'
import MyEnrollments from './Pages/Student/MyEnrollments'
import CourseDetails from './Pages/Student/CourseDetails'
import Player from './Pages/Student/Player'
import Loading from './Components/Student/Loading'
import Educator from './Pages/Educator/Educator'
import DashBoard from './Pages/Educator/DashBoard'
import AddCourse from './Pages/Educator/AddCourse'
import MyCourses from './Pages/Educator/MyCourses.'
import StudentEnrolled from './Pages/Educator/StudentEnrolled'
import Navbar from './Components/Student/Navbar'

function App() {

const isEducatorRoute = useMatch('/educator/*');
  return (
    <div className='text-default min-h-screen bg bg-white '>
      {
        !isEducatorRoute && <Navbar/>
      }
     <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/course-list' element= {<CoursesList/>} />
    <Route path='/course-list/:input' element= {<CoursesList/>}/>
    <Route path='/course/:id' element= {<CourseDetails/>} />
    <Route path='/my-enrollment' element= {<MyEnrollments/>} />
    <Route path='/player/:courseId' element= {<Player/>} />
    <Route path='/loading/path' element= {<Loading/>} />
    <Route path="/educator" element={<Educator />}>
  <Route index element={<DashBoard />} />
     <Route path="add-course" element={<AddCourse />} />
    <Route path="my-course" element={<MyCourses />} />
    <Route path="student-enrolled" element={<StudentEnrolled />} />
</Route>

  </Routes>

    </div>
  )
}

export default App