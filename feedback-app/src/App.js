import Header from "./components/Header";
import { useContext } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutLink from "./components/AboutLink";
import FeedbackContext, { FeedbackProvider } from "./context/FeedbackContext";

export default function App(props) {
  return (
    <FeedbackProvider>
      <Router>
        <Header text={"Feedback UI"} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </div>
        <AboutLink />
      </Router>
    </FeedbackProvider>
  );
}