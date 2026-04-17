import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Event from './pages/Event'
import Register from './pages/Register'
import Career from './pages/Career'
import CoachRegister from './pages/CoachRegister'
import CoachApply from './pages/CoachApply'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import CoachLogin from './pages/CoachLogin'
import CoachDashboard from './pages/CoachDashboard'
import StudentDashboard from './pages/StudentDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import SplashScreen from './components/SplashScreen'
import './App.css'
import AdminCoachApplications from './pages/AdminCoachApplications';

import { AuthProvider } from './context/AuthContext'
import AdminRoute from './components/AdminRoute'
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds splash screen
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/register" element={<Register />} />
            <Route path="/career" element={<Career />} />
            <Route path="/coach-register" element={<CoachRegister />} />
            <Route path="/coach-apply" element={<CoachApply />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/coach-login" element={<CoachLogin />} />
            <Route path="/admin/applications" element={
    <AdminRoute>
        <AdminCoachApplications />
    </AdminRoute>
} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/player-dashboard"
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/coach-dashboard"
              element={
                <ProtectedRoute>
                  <CoachDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/student-dashboard"
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
