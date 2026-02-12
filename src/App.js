import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CareersOverviewPage from './pages/CareersOverviewPage.jsx';
import SolutionsPage from './pages/SolutionsPage.jsx';
import ClientsPage from './pages/ClientsPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/careers" element={<CareersOverviewPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/about/clients" element={<ClientsPage />} />
      
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
