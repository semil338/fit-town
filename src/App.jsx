import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import WorkoutPlan from "./pages/WorkoutPlan";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <div className="bg-[#fcfdff] w-full overflow-hidden">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="exercise/:id" element={<ExerciseDetail />} />
          <Route path="workout" element={<WorkoutPlan />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
