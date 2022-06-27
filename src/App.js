import Suggestions from "./components/suggestions/Suggestions";
import NavBar from "./components/navbar/NavBar";
import FcontextProvider from "./store/FcontextProvider";
import { Route, Routes, Navigate } from "react-router-dom";
import AddOrEditFeedback from "./components/feedbacks/AddOrEditFeedback";
import FeedbackDetail from "./components/feedbacks/FeedbackDetail";
import RoadMap from "./components/roadmap/RoadMap";
import MainHeader from "./components/header/MainHeader";

const App = () => {
  return (
    <FcontextProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/suggestions" />} />
        <Route
          path="/suggestions"
          element={
            <>
              <MainHeader />
              <div className="container">
                <NavBar />
                <Suggestions />
              </div>
            </>
          }
        />
        <Route path="/new-feedback" element={<AddOrEditFeedback />} />

        <Route
          path="/feedback-detail/:feedbackId"
          element={<FeedbackDetail />}
        />

        <Route
          path="/edit-feedback/:feedbackId"
          element={<AddOrEditFeedback />}
        />
        <Route path="/roadmap" element={<RoadMap />} />
      </Routes>
    </FcontextProvider>
  );
};

export default App;
