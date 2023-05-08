
import { React } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './routes/Home';
import Register from './routes/Register';
import Profile from './routes/Profile';
import Main from './routes/Main';
import Meetup from "./routes/Meetup";
import Opportunities from "./routes/Opportunities"
import Connection from "./routes/Connection"
import Chat from "./routes/Chat";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/main" element={<Main />} />
        <Route path="/meetup" element={<Meetup />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/network" element={<Connection />}/>
        <Route path="/chat" element={<Chat />}/>
      </Routes>
    </Router>
    </BrowserRouter>
  
  );
}



export default App;
