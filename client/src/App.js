import { Routes, Route } from 'react-router-dom'
import './App.css';
// import React, { useState, useEffect } from 'react';
import Index from './views/Index';
import Results from './views/Results'
import About from './views/About'

function App() {
    //SOCKET.io CLIENTSIDE FOUNDATION
    // const [socket] = useState(() => io(':8000'));
    // useEffect(() => {
    //     console.log('Is this running?')
    //     socket.on('Welcome', data => console.log(data))
    //     return () => socket.disconnect(true);
    // }, []);
    return (
        <div className="App">
            <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/:id' element={<Results />}/>
            <Route path='/about' element={<About/>} />
            </Routes>
        </div>
    );
}

export default App;
