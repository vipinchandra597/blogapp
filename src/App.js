import "./App.css";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navs from "./components/Navs";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navs  />
        <Routes>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          <Route path='/post' element={<Post/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
