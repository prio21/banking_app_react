
import '../CSS/signup.css'
import {  useNavigate } from "react-router-dom";


const Signup = () => {

     const navigate = useNavigate(); 
   // const history = useHistory();
    const registerUser = () =>  {

        // form.classList.add('form--no');
        // Get input values
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
     
        // Create an object to represent the user
        var user = {
            username: username,
            email: email,
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


    return(
        <div className='signup'>
            <div className="user">
        <header className="user__header">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg" alt="" />
            <h1 className="user__title">Please Register to  HindustanBank banking system</h1>
        </header>
        
        <form className="form">
          <div className="form__group">
            <input type="text" placeholder="Username" className="form__input" id="username"/>
        </div>
        
        <div className="form__group">
            <input type="email" placeholder="Email" className="form__input"  id="email"/>
        </div>
        
        <div className="form__group">
            <input type="password" placeholder="Password" className="form__input" id="password"/>
        </div>
        
            
            <button className="btn" type="button"  onClick={registerUser} >Register</button>

            <button className="btn" type="button" id="Already_a_member"> Already a member </button>
        </form>
    </div>
    </ div>
       
    )
}

export default Signup;