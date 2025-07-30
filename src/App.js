// import { Home } from "lucide-react";
import { Home } from "lucide-react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinqHome from "./components/LinqHome";
import { JoinOurTeam } from "./components/JoinOurTeam";
import JobDescription from "./components/JobDescription";



function App() {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
          <Route path="/">
         <Route index element={<LinqHome />}/>
         <Route path="JoinourTeam" element={<JoinOurTeam />} />
         <Route path="JobDescription" element={<JobDescription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
