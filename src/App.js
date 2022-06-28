import { Route, Routes, Navigate } from "react-router-dom";
import AddOrEditFeedback from "./components/feedbacks/AddOrEditFeedback";
import FeedbackDetail from "./components/feedbacks/FeedbackDetail";
import RoadMap from "./components/roadmap/RoadMap";
import FContext from "./store/Fcontext";
import { useContext } from "react";
import Layout from "./components/layout/Layout";
import AuthPage from "./pages/AuthPage";
import SuggestionsPage from "./pages/SuggestionsPage";

const App = () => {
  const { isLoggedIn } = useContext(FContext);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/suggestions" />
            ) : (
              <Navigate to="/auth" />
            )
          }
        />

        {!isLoggedIn && <Route path="/auth" element={<AuthPage />} />}

        <Route
          path="/suggestions"
          element={isLoggedIn ? <SuggestionsPage /> : <Navigate to="/auth" />}
        />

        <Route
          path="/new-feedback"
          element={isLoggedIn ? <AddOrEditFeedback /> : <Navigate to="/auth" />}
        />

        <Route
          path="/feedback-detail/:feedbackId"
          element={isLoggedIn ? <FeedbackDetail /> : <Navigate to="/auth" />}
        />

        <Route
          path="/edit-feedback/:feedbackId"
          element={isLoggedIn ? <AddOrEditFeedback /> : <Navigate to="/auth" />}
        />

        <Route
          path="/roadmap"
          element={isLoggedIn ? <RoadMap /> : <Navigate to="/auth" />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
