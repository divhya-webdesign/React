import React from 'react'
import './register.css';

const Signup = () => {
    return(
        <section>
            
            {/* <div className="main-box">
                <div className="details">
                    <h1>Sign up</h1>
                
                            <i class="fa-regular fa-user icon"></i>
                            <input type="text" placeholder="username" name="name"/>
                            <i class="fa-regular fa-envelope icon"></i>
                            <input type="email" placeholder="email" />
                            <i class="fa-solid fa-key icon"></i>
                            <input type="password" placeholder="enter password" />
                            <i class="fa-solid fa-lock icon"></i>
                            <input type="password" placeholder="retype password" />
                         
                            <button class="button">Register</button>
                       
                </div>
                       
                        <div className="">
                            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" />
                        </div> 
                    
                   
                

                
                
            </div> */}
            <div className="flex-container">
                <div className="flex-left">
                    <h1>Sign up</h1>
                    <i class="fa-regular fa-user icon"></i>
                    <input type="text" placeholder="username" name="name"/>
                    <i class="fa-regular fa-envelope icon"></i>
                    <input type="email" placeholder="email" />
                    <i class="fa-solid fa-key icon"></i>
                    <input type="password" placeholder="enter password" />
                    <i class="fa-solid fa-lock icon"></i>
                    <input type="password" placeholder="retype password" />
                
                    <button class="button">Register</button>
                </div>
                <div className="flex-right">
                    <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg" />
            
                </div>
            </div>
        </section>
    );
}

export default Signup;