import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Lookup from './pages/Lookup';
import './App.css';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lookup" element={<Lookup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
