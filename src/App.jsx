// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Homepage
import Homepage from './pages/Homepage.jsx';
// About us
import AboutUs from './pages/AboutUs.jsx';
// Posts list
import Posts from './pages/Posts.jsx';
// Navbar component
import Navbar from "./components/Navbar.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>React Blog Pages</h1>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;
