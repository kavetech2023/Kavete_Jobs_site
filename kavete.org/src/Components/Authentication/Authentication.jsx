import React, { useState } from "react";
import "./Authentication.css";
import { auth, googleProvider } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const Authentication = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error);
            
        }
    }   
    
 
    const logout = async () => {
        try {
             await signOut(auth);
        } catch (error) {
            console.log(error);
            
        }
    } 

  return (
    <>
      <div className="fadein">
        <div className="hero">
          <h1>Log In</h1>
        </div>
        <div className="wrapper">
          <h2>Login</h2>
      
          <form action="#">
          <div className="input-box button">
                <button onClick={signInWithGoogle}>Google sign in</button>
                
            </div>
            <div className="input-box button">
                <button onClick={logout}>Logout</button>
            </div>

        
            <div className="policy">
              <input type="checkbox" />
              <h3>I accept all terms & condition</h3>
            </div>
        
            
            <div className="text">
              <h3>
                Already have an account ? {auth?.currentUser?.email} <a href="#">Login now</a>

               
              </h3>
            </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default Authentication;
