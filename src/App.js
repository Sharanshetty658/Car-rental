import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
        <Route path='/'  Component={Home} exact />
        <Route path='/login' Component={Login} exact />

        </Routes>
       
      </BrowserRouter>

    
  );
}

export default App;
