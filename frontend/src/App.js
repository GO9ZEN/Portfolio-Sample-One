import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInPage from './SignInPage/SignInPage';
import BasicPage from './BasicPage/BasicPage';

function App() {
  return (
    <div className="app">

      <Router>
        <Routes>
          <Route path='/' element={<BasicPage />} />
          <Route path='/sign-in' element={<SignInPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
