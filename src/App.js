import Suggestions from "./components/suggestions/Suggestions";
import NavBar from "./components/navbar/NavBar";
import FcontextProvider from "./store/FcontextProvider";
import { Route, Routes, Navigate } from "react-router-dom";
import AddNewFeedback from "./components/feedbacks/AddNewFeedback";

const App = () => {
  return (
    <FcontextProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/suggestions" />} />
        <Route
          path="/suggestions"
          element={
            <div className="container">
              <NavBar />
              <Suggestions />
            </div>
          }
        />
        <Route path="/new-feedback" element={<AddNewFeedback />} />
      </Routes>
    </FcontextProvider>
  );
};

export default App;
