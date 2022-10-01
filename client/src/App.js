import { Routes, Route } from 'react-router-dom'
import './App.css';
import Index from './views/Index';
import Results from './views/Results'
import About from './views/About'

function App() {
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
