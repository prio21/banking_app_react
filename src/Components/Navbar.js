
// import ReactDOM from 'react-router-dom';
import {  Link,Outlet } from 'react-router-dom';

import bac from '../images/bac.jpg';
import '../CSS/background.css'

const Navbar = () => {

    return (
<>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark" style={{opacity: 0.5}}>
        <div className="container-fluid">
          <a className="navbar-brand " href="#">HindustanBank</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/dashboard"   className="nav-link active" aria-current="page">Dashboard</ Link>
              </li>
              <li className="nav-item" >
                {/* <a className="nav-link active" aria-current="page" >Login</a> */}
                <Link to="/login" className="nav-link active" >Login</Link>

              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Signup</a> */}
                <Link to="/signup" className="nav-link active">Signup</Link>
              </li>
              
            </ul>
            
           
            <Outlet />
          </div>
        </div>
      </nav> 

      <div>
        <img src={bac} className='background-image' style={{opacity:0.4}} />
      </div>

      </>
      
    )
}

export default Navbar;