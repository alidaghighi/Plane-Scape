import { useEffect } from 'react';
import Home from './pages/Home';
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'Plane Scape';
  }, []);
  return (
      <Home />
  )
}

export default App
