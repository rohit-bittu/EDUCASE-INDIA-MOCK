
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/SignUp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App p-6 m-auto w-full lg:w-full " >

        <Router>
              <Home/>
              <Navbar/>
              <Routes>
                  <Route path='/' element={<Login/>}/>
                  <Route path='signup' element={<SignUp/>}/>
              </Routes>
              <Footer/>
        </Router>
        
    </div>
  );
}

export default App;
