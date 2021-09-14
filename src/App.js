import './App.css';
import Home from './components/home/Home';
import Watch from './pages/Watch';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Jumbotron from './components/jumbotron/Jumbotron';
import Accordion from './components/accordion/Accordion';

function App() {
  return (
    <div className='App'>
      {/* <Home /> */}
      {/* <Watch /> */}
      {/* <Register />
      <Jumbotron />
      <Accordion /> */}
      <Login />
    </div>
  );
}

export default App;
