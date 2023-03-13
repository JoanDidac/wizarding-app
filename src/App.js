import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from '../src/components/ErrorPage';
import HouseDetails from './components/HouseDetails'

function App() {
  return (
    <div className="App">
    
      <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/:houseId" element={<HouseDetails />} />
      <Route path="*" element={<ErrorPage /> } />
      </Routes>
 
    </div>
  );
}

export default App;
