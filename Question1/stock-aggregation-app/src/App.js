import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StockPage from "./pages/StockPage";
import HeatmapPage from "./pages/HeatmapPage";
import RechartsHeatmap from "./pages/RechartsHeatmap";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StockPage />} />
        <Route path="/heatmap" element={<HeatmapPage />} />
        <Route path="/recharts-heatmap" element={<RechartsHeatmap />} />
      </Routes>
    </Router>
  );
}

export default App;
