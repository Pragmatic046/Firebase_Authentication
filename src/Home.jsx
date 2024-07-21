import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import './App.css'

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setisSignUpActive] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Getting Emails
  function getEmail(e) {
    setEmail(e.target.value);
  }

  //Getting Passwords
  function getPassword(e) {
    setPassword(e.target.value);
  }

  function handleSignUp() {
    if (!email || !password) {
      setError("Email and Password both are required");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate("/private");
      })
      .catch((error) => {
        const errorCode = error.errorcode;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  }

  function handleSignIn() {
    if (!email || !password) {
      setError("Email and Password both are required");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.errorcode;
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(errorCode, errorMessage);
      });
  }

  function handleMethodChange() {
    setisSignUpActive(!isSignUpActive);
  }
  return (
    <>
      <form>
        {isSignUpActive && <legend>Sign Up</legend>}
        {!isSignUpActive && <legend>Sign In</legend>}
        <fieldset>
          <ul>
            <li>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={getEmail} />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={getPassword} />
            </li>
          </ul>
          {isSignUpActive && (
            <button type="button" onClick={handleSignUp}>
              Sign Up
            </button>
          )}
          {!isSignUpActive && (
            <button type="button" onClick={handleSignIn}>
              Sign In
            </button>
          )}
        </fieldset>
        {error && <p id="error-message">{error}</p>}
        {isSignUpActive && (
          <a onClick={handleMethodChange}>Already have an account? Sign In</a>
        )}
        {!isSignUpActive && (
          <a onClick={handleMethodChange}>Do not have an account? Sign Up</a>
        )}
      </form>
    </>
  );
};

export default Home;
