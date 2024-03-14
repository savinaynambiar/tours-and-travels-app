import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";import './App.css';
import Cardconrainer from './components/Cardconrainer';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div className="App">

      <Header />
      <Home />
      <ToastContainer position='top-right'/>
    </div>
  );

  
}


export default App;