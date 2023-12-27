
import Dashboard from './Components/Dashboard';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
     {/* <p style={{textAlign: 'center'}}>My React app</p> */}
     
     <Routes>
      
      <Route path='/' element={<Navbar />}></ Route>
        <Route path='/login' element={<Login />} />
        <Route path = '/signup' element={<Signup />} />
        <Route path = '/signup/dashboard' element={<Dashboard /> } />
        <Route path = '/login/dashboard' element={<Dashboard /> } />
      
      7
      </ Routes>

    </>
   
  );
}

export default App;
