// import React, { useState } from 'react';
// import FullWidthLayout from '../components/FullWidthLayout';
// import { useAuth } from '../context/AuthContext';
// import '../styles/dashboard.css';
// import '../styles/coach.css';

// const CoachDashboard = () => {
//     const { user } = useAuth();
//     const [showCalendar, setShowCalendar] = useState(false);
//     const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString('en-GB'));
//     const [coachPresent, setCoachPresent] = useState(false);

//     // Mock Student Data
//     const [students, setStudents] = useState([
//         { id: 1, name: 'Rahul', attendance: 'Absent', validity: '30 Mar 2026' },
//         { id: 2, name: 'Aman', attendance: 'Present', validity: '12 Apr 2026' },
//         { id: 3, name: 'Kiran', attendance: 'Absent', validity: '05 May 2026' },
//     ]);

//     // Mock Video Data
//     const [videos, setVideos] = useState([
//         { id: 1, title: 'Batting Basics', thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=250&fit=crop', description: 'Master the straight drive' },
//         { id: 2, title: 'Bowling Drills', thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e3adbb47c1?w=400&h=250&fit=crop', description: 'Improving line and length' },
//     ]);

//     const [videoForm, setVideoForm] = useState({ title: '', file: null, description: '' });

//     const handleMarkAttendance = (id, status) => {
//         setStudents(students.map(s => s.id === id ? { ...s, attendance: status } : s));
//     };

//     const handleUploadVideo = (e) => {
//         e.preventDefault();
//         if (!videoForm.title) return;
//         const newVideo = {
//             id: Date.now(),
//             title: videoForm.title,
//             thumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=250&fit=crop', // Placeholder
//             description: videoForm.description
//         };
//         setVideos([...videos, newVideo]);
//         setVideoForm({ title: '', file: null, description: '' });
//     };

//     return (
//         <FullWidthLayout>
//             <div className="coach-dashboard-wrapper">
//                 {/* SECTION 1 — Welcome Header */}
//                 <section className="welcome-header-section">
//                     <div className="welcome-left">
//                         <h1>Welcome Coach {user?.name || 'Rahul'}</h1>
//                         <p>Manage your students and training activities.</p>
//                     </div>
//                     <div className="welcome-right">
//                         <button className="calendar-toggle-btn" onClick={() => setShowCalendar(!showCalendar)}>
//                             📅 Select Date
//                         </button>
//                         {showCalendar && (
//                             <div className="calendar-dropdown-mock">
//                                 <input
//                                     type="date"
//                                     onChange={(e) => {
//                                         setSelectedDate(new Date(e.target.value).toLocaleDateString('en-GB'));
//                                         setShowCalendar(false);
//                                     }}
//                                 />
//                                 <div className="mock-info">
//                                     Displaying info for: {selectedDate}
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </section>

//                 <div className="dashboard-grid-main">
//                     {/* SECTION 2 — Coach Attendance */}
//                     <section className="coach-attendance-card">
//                         <div className="card-header">
//                             <h3>Today's Attendance</h3>
//                             <span className="current-date">{selectedDate}</span>
//                         </div>
//                         <div className="card-body">
//                             <div className="attendance-status">
//                                 <div className={`status-indicator ${coachPresent ? 'present' : 'absent'}`}></div>
//                                 <span>{coachPresent ? 'Present' : 'Not Marked'}</span>
//                             </div>
//                             <button
//                                 className={`mark-btn ${coachPresent ? 'disabled' : ''}`}
//                                 onClick={() => setCoachPresent(true)}
//                                 disabled={coachPresent}
//                             >
//                                 {coachPresent ? 'Marked Present' : 'Mark Present'}
//                             </button>
//                         </div>
//                         <div className="mini-calendar-view">
//                             <p>Attendance History</p>
//                             <div className="calendar-dots">
//                                 {[...Array(30)].map((_, i) => (
//                                     <div key={i} className={`dot ${i < 10 ? 'green' : 'gray'}`}></div>
//                                 ))}
//                             </div>
//                         </div>
//                     </section>

//                     {/* SECTION 3 — Student Management Table */}
//                     <section className="student-management-section">
//                         <h3>Student Management</h3>
//                         <div className="table-responsive">
//                             <table className="student-table">
//                                 <thead>
//                                     <tr>
//                                         <th>Student Name</th>
//                                         <th>Mark Attendance</th>
//                                         <th>Plan Validity</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {students.map(student => (
//                                         <tr key={student.id}>
//                                             <td>{student.name}</td>
//                                             <td>
//                                                 <div className="attendance-toggle">
//                                                     <button
//                                                         className={student.attendance === 'Present' ? 'active' : ''}
//                                                         onClick={() => handleMarkAttendance(student.id, 'Present')}
//                                                     >
//                                                         Present
//                                                     </button>
//                                                     <button
//                                                         className={student.attendance === 'Absent' ? 'active' : ''}
//                                                         onClick={() => handleMarkAttendance(student.id, 'Absent')}
//                                                     >
//                                                         Absent
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                             <td>{student.validity}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </section>

//                     {/* SECTION 4 — Upload Practice Video */}
//                     <section className="upload-video-section">
//                         <h3>Upload Practice Video</h3>
//                         <form className="upload-form" onSubmit={handleUploadVideo}>
//                             <div className="form-group">
//                                 <label>Video Title</label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter video title"
//                                     value={videoForm.title}
//                                     onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label>Upload Video File</label>
//                                 <input
//                                     type="file"
//                                     onChange={(e) => setVideoForm({ ...videoForm, file: e.target.files[0] })}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label>Description</label>
//                                 <textarea
//                                     placeholder="Enter description"
//                                     value={videoForm.description}
//                                     onChange={(e) => setVideoForm({ ...videoForm, description: e.target.value })}
//                                 ></textarea>
//                             </div>
//                             <button type="submit" className="upload-btn">Upload Video</button>
//                         </form>
//                     </section>

//                     {/* SECTION 5 — Uploaded Videos List */}
//                     <section className="uploaded-videos-section">
//                         <h3>Uploaded Videos</h3>
//                         <div className="video-grid-dashboard">
//                             {videos.map(video => (
//                                 <div key={video.id} className="video-card-dash">
//                                     <div className="video-thumb">
//                                         <img src={video.thumbnail} alt={video.title} />
//                                         <button className="play-btn">▶</button>
//                                     </div>
//                                     <div className="video-info-dash">
//                                         <h4>{video.title}</h4>
//                                         <p>{video.description}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         </FullWidthLayout>
//     );
// };

// export default CoachDashboard;


import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ExercisePlanCard from "../components/CoachDashboard/ExercisePlanCard";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import '../styles/coach.css';

const CoachDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className="full-width-layout">
            <Navbar />
            <div className="dashboard-main-full">  {/* ← this has padding-top: 100px */}
                <div className="container-full">
                    <div className="coach-dashboard-wrapper">

                        {/* Welcome Header */}
                        <div className="welcome-header-section">
                            <div className="welcome-left">
                                <h1>Welcome, {user?.name} 👋</h1>
                                <p>Level: <strong>{user?.level || "B1"}</strong> — Here are your exercise plans</p>
                            </div>
                            <button
                                onClick={handleLogout}
                                style={{ padding: "10px 20px", background: "#dc3545", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}>
                                Logout
                            </button>
                        </div>

                        {/* Exercise Plans */}
                        <ExercisePlanCard />

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CoachDashboard;