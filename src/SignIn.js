import React, { useState } from 'react'
import './SignIn.css'
import { auth } from './firebase'
import { Link, useHistory } from 'react-router-dom';


function SignIn() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (event) => {
        event.preventDefault();        
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => 
            history.push('/')
            )
        .catch((error) => alert(error.message));
    }
    
    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth => {
            if (auth){
                history.push('/')
            }
        })
        )
        .catch((error) => alert(error.message));
    }

    return (
        <div className="signIn">
            
            <div className="signIn__content">

                <Link to='/to'>
                    <img className="signIn__logo" src="https://logos-marcas.com/wp-content/uploads/2020/04/Amazon-Logo.png" alt="amazonLogo"/>
                </Link>

                <div className="signIn__box">
                    
                    {/* inside box:*/}

                    <h1>Sign in</h1>


                    <form className="signIn__submit">
                        <h5>E-mail</h5>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>

                        <h5>Password</h5>    
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>   

                        <br/>
                        <button type="submit" onClick={signIn}>Sign In</button>
                    </form>
                    
                    <div className="signIn__registerField">
                        <p>If you actually don't have an account then register a new fake amazon account. (This is a clon duh)</p>
                        <button onClick={register}>REGISTER</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default SignIn
