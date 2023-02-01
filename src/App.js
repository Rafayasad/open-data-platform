import './App.css';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'))
const Dataset = lazy(() => import('./pages/Dataset'))
const About = lazy(() => import('./pages/About'))

function App() {
  return (
    // <Home />
    // <Dataset />
    <About />
  );
}

export default App;
