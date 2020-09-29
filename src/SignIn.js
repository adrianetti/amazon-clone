import React from 'react'
import './SignIn.css'


function SignIn() {
    return (
        <div className="signIn">
            
            <div className="signIn__content">
                <img className="signIn__logo" src="https://logos-marcas.com/wp-content/uploads/2020/04/Amazon-Logo.png" alt="amazonLogo"/>
                <div className="signIn__box">
                    
                    {/* inside box:*/}

                    <h1>Sign in</h1>


                    <form className="signIn__submit">
                        <h5>E-mail</h5>
                        <input type="text"></input>

                        <h5>Password</h5>    
                        <input type="password"></input>   

                        <br/>
                        <button type="submit">Sign In</button>
                    </form>
                    
                    <div className="signIn__registerField">
                        <p>If you actually don't have an account then register a new fake amazon account. (This is a clon duh)</p>
                        <button>REGISTER</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default SignIn
