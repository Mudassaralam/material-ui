import React from 'react';
import Navbar from './Components/Dashboard/Navbar/Navbar'
import MainDashboard from './Components/Dashboard/MainDashboard/MainDashboard'
import Addpost from './Components/Dashboard/AddPost/Addpost';
import Navbaragain from './Components/Dashboard/Navbar/Navbaragain';
function App() {
  return (
   <>
    {/* <Navbar/> */}
    <Navbaragain />
    <MainDashboard />
    <Addpost />
   </>
  );
}

export default App;
