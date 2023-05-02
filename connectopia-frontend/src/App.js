
import { React } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './routes/Home';
import Register from './routes/Register';
import Profile from './routes/Profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router>
  
  );
}



export default App;
