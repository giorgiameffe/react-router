// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Homepage
import Homepage from './pages/Homepage.jsx';
// About us
import AboutUs from './pages/AboutUs.jsx';
// Posts list
import Posts from './pages/Posts.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>React Blog Pages</h1>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/posts-list" element={<Posts />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
