// import { Home } from "lucide-react";
import { Home } from "lucide-react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinqHome from "./components/LinqHome";
import { JoinOurTeam } from "./components/JoinOurTeam";
import JobDescription from "./components/JobDescription";
import ImgGallery from "./components/ImgGallery";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
      <BrowserRouter>
       <ScrollToTop />
        <Routes>
          <Route path="/">
         <Route index element={<LinqHome />}/>
         <Route path="JoinourTeam" element={<JoinOurTeam />} />
         <Route path="JobDescription" element={<JobDescription />} />
         <Route path="ImgGallery" element={<ImgGallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
