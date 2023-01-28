import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import BodyPartExercises from "./Pages/BodyPartExercises";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:bodypart" element={<BodyPartExercises />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
