
import './App.css';
import LoginPageComponent from './components/LogInPageComponent';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>

    </Router>
      //<LoginPageComponent></LoginPageComponent>
  );
}

export default App;
