import React from 'react';
import { Link } from "react-router-dom";

import "./SignInHeader.css";

function SignInHeader() {
  return (
    <div>
      <div className="header-signIn">
        <Link className="header-signIn-topic" to="/" style={{"textDecoration": "none"}}>
          <h2 className="header-signIn-topic-one">Portfo</h2>
          <h2 className="header-signIn-topic-two">lio.</h2>
        </Link>
      </div>
    </div>
    
  );
}

export default SignInHeader;

