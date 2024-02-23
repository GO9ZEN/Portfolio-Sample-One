import React from 'react';
import SignInBackground from './SignInBackground/SignInBackground';
import SignInHeader from './SignInHeader/SignInHeader';
import FooterPart from "../BasicPage/Footer/FooterPart/FooterPart";

import "./SignInPage.css";

function SignInPage() {
  return (
    <div>
      <SignInHeader />
      <SignInBackground />
      <FooterPart />
    </div>
  )
}

export default SignInPage;