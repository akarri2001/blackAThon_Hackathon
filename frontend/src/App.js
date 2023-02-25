
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPageComponent from './components/LogInPageComponent';
import FeedPage from './components/FeedPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPageComponent/>}></Route>
        <Route path="/pollTest" element={<FeedPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
