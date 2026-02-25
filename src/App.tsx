import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SurveysPage from "./pages/SurveysPage";
import BuilderPage from "./pages/BuilderPage";
import ResultsPage from "./pages/ResultsPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<SurveysPage />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/settings" element={<SurveysPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
