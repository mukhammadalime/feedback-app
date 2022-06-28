import { useContext } from "react";
import AuthPage from "./pages/AuthPage";
import FContext from "./store/Fcontext";
import RoadMapPage from "./pages/RoadMapPage";
import Layout from "./components/layout/Layout";
import SuggestionsPage from "./pages/SuggestionsPage";
import AddFeedbackPage from "./pages/AddFeedbackPage";
import { Route, Routes, Navigate } from "react-router-dom";
import FeedbackDetailPage from "./pages/FeedbackDetailPage";
import EditFeedback from "./components/feedbacks/EditFeedback";

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
          element={isLoggedIn ? <AddFeedbackPage /> : <Navigate to="/auth" />}
        />

        <Route
          path="/feedback-detail/:feedbackId"
          element={
            isLoggedIn ? <FeedbackDetailPage /> : <Navigate to="/auth" />
          }
        />

        <Route
          path="/edit-feedback/:feedbackId"
          element={isLoggedIn ? <EditFeedback /> : <Navigate to="/auth" />}
        />

        <Route
          path="/roadmap"
          element={isLoggedIn ? <RoadMapPage /> : <Navigate to="/auth" />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
