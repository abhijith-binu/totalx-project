import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Pages/Login'
import Login from './Pages/Login';
import Otp from './Pages/Otp';
import Dashboard from './Pages/Dashboard';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/otp' element={<Otp/>}/>
          <Route path='/dash' element={<Dashboard/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
