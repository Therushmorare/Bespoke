import { Routes, Route } from 'react-router';
import HomePage from "./pages/homepage/HomePage";
import LoomHomePage from "./pages/loomaipage/LoomHomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/loom" element={<LoomHomePage />} />
    </Routes>
  );
}
