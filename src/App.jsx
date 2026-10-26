import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import HomePage from './Page/HomePage/HomePage';
import About from './component/About/About';
import Application from './Page/ApplicationPage/Application';
import Department from './Page/Department/Department';
import CultEvent from './Page/CulturalEvent/CultEvent';
import EService from './Page/E-Service/EService';
import AboutMe from './Page/AboutMe/AboutMe';
import Contact from './Page/Contact/Contact';

// 👇 ADD THESE TWO IMPORTS
import VideoPage from './Page/VideoPage/VideoPage';
import VideoList from './Page/VideoPage/VideoList'; // optional listing page
import AdModal from './component/AdModel/AdModal'; // Adjust path if located elsewhere

function App() {
  return (
    <div>
      <AdModal
        adId="madrasah-admission-2026-v2" 
        imageUrl="https://shorifart.com/wp-content/uploads/2025/10/Vorti-Colche.jpg" 
        targetLink="https://yourwebsite.com/promotion" 
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Department" element={<Department />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/EService" element={<EService />} />
        <Route path="/CultEvent" element={<CultEvent />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />

        {/* 👇 ADD THESE TWO ROUTES */}
        <Route path="/videos" element={<VideoList />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
      </Routes>
      <About />
    </div>
  );
}

export default App;