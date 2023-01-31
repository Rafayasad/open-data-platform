import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <div className='row align-items-center justify-content-center'>
    //       <div className='col-xxl-8 col-lg-8 col-md-12 col-sm-12 col-xsm-12'>
    //         <Heading heading={"Making data available for everyone"} />
    //       </div>
    //     </div>
    //   </header>
    // </div>
    <Home />
  );
}

export default App;
