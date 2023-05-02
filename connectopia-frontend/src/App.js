
import { React } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './routes/Home';
import Register from './routes/Register';
import Profile from './routes/Profile';
import Main from './routes/Main';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  
  );
}



export default App;
