import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import Message from '../../../components/Message';
import Loader from "../../../components/Loader";
import { signIn } from '../../../actions/userActions';

import "./SignInpage.css";

function SignInpage() {
  const location = useLocation()
  const navigate = useNavigate();

  const [isVisible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userSignIn = useSelector((state) => state.userSignIn)
  const { loading, error, userInfo } = userSignIn

  const redirect = location ? location.split('=')[1] : '/'

  useEffect(() => {
    if(userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signIn(email, password))
  }

  return (
    <div className="sign-in-page">
      <div className="sign-in-part">
        <div className="login-topic">
          <h3>LOGIN</h3>
        </div>

        <div className="login-form">
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <form className="login" onSubmit={submitHandler}>

            <div className="login-field" id='email'>
              <input type="email" className="login-input" placeholder="Email or username" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="login-field second-part" id='password'>
              <input className="login-input-first" placeholder="Password" type={!isVisible ? "password" : "text"} value={password} onChange={(e) => setPassword(e.target.value)} required />
              <span className="login-input-icon" onClick={toggle}>
                {isVisible ? <span><i class="fa-solid fa-eye"></i></span> : <span><i class="fa-solid fa-eye-slash"></i></span>}
              </span>
            </div>

            <div className="chekbox-password">
              {/* <div className="checkbox-part"><input type="checkbox" value="lsRememberMe" id="rememberMe" /><label for="rememberMe"><p>Remember me</p></label></div> */}
              <div className="forgot-password"><p>Forgot password?</p></div>
            </div>

            <button className="button login-submit" type='submit'>
              <p className="button-text">SIGN IN</p>
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default SignInpage;