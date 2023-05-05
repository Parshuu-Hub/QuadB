import { Routes, Route } from "react-router-dom";
import ShowDetails from "./components/ShowDetails";
import ShowNames from "./components/ShowNames";
// import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/shows/:showId" element={<ShowDetails />} />
        <Route path="/" element={<ShowNames />} />
      </Routes>
    </>
  );
}

export default App;
