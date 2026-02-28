import React from 'react'
import './Login.css'

const Login = () =>
{
    return(
        
        <div>
            
       <title>Login Form</title>
         <div className='border'>
         <h1>Sign in to this Site</h1>
         <p>YOU WANT MOST GAMES IN HERE </p>
         <form>
        
            <div> 🕷<input type ='name' placeholder='Name'/></div>
        <div>✉ <input type='email'placeholder='Enter your Email '/> </div>
        <div>🔑 <input type='password' placeholder='Enter your Password'/> </div>
        <div>🌎 <input type ='country'  placeholder='Country'/>
        </div>
        <div> <a href='#' className='forgot'>Forgot Password?</a> </div>
             <div> <button type="submit">Login</button> </div>
             
         </form>
        </div>
         
        </div>
        
    )
}
export default Login