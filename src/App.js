import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Router } from 'react-router-dom';
import Routerrename from './routes/Routerrename';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
    <Routerrename />
   
    </div>
  );
}


export default App;
