import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/student-dashboard.css';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

// Importing sub-components
import LiveTrainingCard from '../components/StudentDashboard/LiveTrainingCard';
import AttendanceCalendar from '../components/StudentDashboard/AttendanceCalendar';
import PlanValidityCard from '../components/StudentDashboard/PlanValidityCard';
import ExercisePlan from '../components/StudentDashboard/ExercisePlan';
import DietPlan from '../components/StudentDashboard/DietPlan';
import PracticeVideos from '../components/StudentDashboard/PracticeVideos';

import { useEffect, useState } from "react";
import { checkLiveSession } from "../api/liveApi";




const StudentDashboard = () => {
    const [liveSession, setLiveSession] = useState(null);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

    const student = JSON.parse(localStorage.getItem("user"));

    if(student?.academyId){

        checkLiveSession(student.academyId)
        .then(data => {
            setLiveSession(data);
        })
        .catch(err => console.log(err));

    }

}, []);

    return (
        <div className="student-dashboard-page">
            <Navbar />
            <div className="student-dashboard-container">
                {/* Main Content Area */}
                <main className="student-main-content">

                    {/* SECTION 1 - Welcome Header */}
                    <header className="student-dashboard-section welcome-header">
                        <h1>Welcome back, {user?.name || 'Rahul'}</h1>
                        <p>Track your training progress and stay consistent with your practice.</p>
                    </header>

                    {/* SECTION 2 - Live Training + Schedule */}
                    <section className="student-dashboard-section">
                        <LiveTrainingCard />
                    </section>

                    {/* SECTION 3 - Attendance + Plan Validity */}
                    <section className="student-dashboard-section">
                        <h2 className="section-title">Training Activity</h2>
                        <div className="training-activity-row">
                            <AttendanceCalendar />
                            <PlanValidityCard />
                        </div>
                    </section>

                    {/* SECTION 4 - Exercise Plan */}
                    <section className="student-dashboard-section">
                        <h2 className="section-title">Training Programs</h2>
                        <ExercisePlan />
                    </section>

                    {/* SECTION 5 - Diet Plan */}
                    <section className="student-dashboard-section">
                        <h2 className="section-title">Nutrition & Diet</h2>
                        <DietPlan />
                    </section>

                    {/* SECTION 6 - Practice Videos */}
                    <section className="student-dashboard-section">
                        <h2 className="section-title">Practice Videos</h2>
                        <PracticeVideos />
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default StudentDashboard;
