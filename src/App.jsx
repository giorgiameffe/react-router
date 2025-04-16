// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Homepage
import Homepage from './pages/Homepage.jsx';
// About us
import AboutUs from './pages/AboutUs.jsx';
// Posts list
import Posts from './pages/Posts.jsx';
// Default Layout
import DefaultLayout from "./layouts/DefaultLayout.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
