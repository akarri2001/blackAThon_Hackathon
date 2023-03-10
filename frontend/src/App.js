
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPageComponent from './components/LogInPageComponent';
import FeedPage from './components/FeedPage'
import CreatePollComponent from './components/CreatePollComponent';
import TestCreatePoll from './components/testCreatePoll'
import ProfilePageComponentStudent from './components/ProfilepageComponentStudent';
import ProfilePageComponentGov from './components/ProfilePageComponentGov';
import TestComponent from './components/testComponent';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPageComponent/>}></Route>
        <Route path="/pollTest" element={<FeedPage/>}></Route>
        <Route path="/createPollTest" element={<TestCreatePoll/>}></Route>
        <Route path="/profilePageTest" element={<ProfilePageComponentStudent/>}></Route>
        <Route path="/profileGovPageTest" element={<ProfilePageComponentGov/>}></Route>
        <Route path="/myPolls" element={<ProfilePageComponentStudent/>}></Route>
        <Route path="/test" element={<TestComponent/>}></Route>
        <Route path="/studentProfile/:studentMongoId" element={<ProfilePageComponentStudent/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
