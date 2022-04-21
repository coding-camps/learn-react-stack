import './App.css'
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    )
}

export default App
