import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Paralax from './components/Paralax';
import Cardp1 from './components/Cardp1';

const App = () => {
    return (
        <div>
        <Navbar />
        <Paralax img src={process.env.PUBLIC_URL + "/images/geometric.jpg"} alt="parallax" />
        <Cardp1 />
        </div>
    )
}

export default App;