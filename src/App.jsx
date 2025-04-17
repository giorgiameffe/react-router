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
// Single post
import SinglePost from "./pages/SinglePost.jsx";
// Not Found
import NotFound from "./pages/NotFound.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<SinglePost />} />
          </Route>
          {/* Rotta catch all */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
