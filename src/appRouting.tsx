// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShellContainer from "./components/shellContainer";
import LandingPage from "./pages/landingPage";
// import Products from "./pages/products";


function AppRouting() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ShellContainer />}
          >
          <Route
          path="/"
          element={<LandingPage/>}
          />
          </Route>
      </Routes>
    </Router>
  );
}

export default AppRouting;
