import '../CSS/login.css';

import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate(); 
    // const history = useHistory();
     const registerUser = () =>  {
 
         // form.classList.add('form--no');
         // Get input values
         var username = document.getElementById("username").value;
         
         var password = document.getElementById("password").value;
      
         // Create an object to represent the user
         var user = {
             username: username,
             
             password: password
         };
      
         
      
         console.log("clicked")
      
         
         
      
         if(isValidPassword(password)){
      
         
      
             navigate('./dashboard');
          //window.location.href = "dashboard.html";
          
          
         }else{
          alert("Your password is not valid");
         }
      
        
      }
      
     const  isValidPassword = (password) => {
      
          const hasLowercase = /[a-z]/.test(password);
          const hasUppercase = /[A-Z]/.test(password);
          
          const isPalindrome = password === password.split('').reverse().join('');
          return password.length >= 8 && hasLowercase && hasUppercase && !isPalindrome;
      
      
      }
 

    return (

        <>
         <section className="container">
        <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                <h1 className="opacity">LOGIN</h1>
                <form>
                <input type="text" placeholder="Username" className="form__input" id="username"/>
                <input type="password" placeholder="Password" className="form__input" id="password"/>
                    
                    <button className="btn" type="button"  onClick={registerUser} >Submit</button>
                </form>
              
            </div>
            <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
    </section>
        </>
    )
}

export default Login;