import React, { useState } from 'react';
import DashboardLayout from './DashboardLayout';

const StudentManagement = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'Aditya Tole', sport: 'Cricket', plan: 'Gold', attendance: 85, status: 'Present' },
        { id: 2, name: 'Sanket Patil', sport: 'Football', plan: 'Pro', attendance: 92, status: 'Present' },
        { id: 3, name: 'Rahul Deshmukh', sport: 'Cricket', plan: 'Elite', attendance: 78, status: 'Absent' },
        { id: 4, name: 'Manoj Kumar', sport: 'Athletics', plan: 'Gold', attendance: 65, status: 'Present' },
    ]);

    const [activeTab, setActiveTab] = useState('list'); // 'list', 'attendance', 'video'

    const toggleAttendance = (id) => {
        setStudents(students.map(s =>
            s.id === id ? { ...s, status: s.status === 'Present' ? 'Absent' : 'Present' } : s
        ));
    };

    return (
        <div className="student-management">
            <div className="management-tabs">
                <button className={activeTab === 'list' ? 'active' : ''} onClick={() => setActiveTab('list')}>Student List</button>
                <button className={activeTab === 'attendance' ? 'active' : ''} onClick={() => setActiveTab('attendance')}>Mark Attendance</button>
                <button className={activeTab === 'video' ? 'active' : ''} onClick={() => setActiveTab('video')}>Upload Video</button>
            </div>

            <div className="management-content">
                {activeTab === 'list' && (
                    <div className="student-list-table">
                        <h3>Student Performance Overview</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>Sport</th>
                                    <th>Plan</th>
                                    <th>Attendance %</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(student => (
                                    <tr key={student.id}>
                                        <td>{student.name}</td>
                                        <td>{student.sport}</td>
                                        <td><span className={`plan-badge ${student.plan.toLowerCase()}`}>{student.plan}</span></td>
                                        <td>
                                            <div className="progress-bar-container">
                                                <div className="progress-bar" style={{ width: `${student.attendance}%` }}></div>
                                                <span>{student.attendance}%</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'attendance' && (
                    <div className="attendance-marking">
                        <h3>Today's Attendance ({new Date().toLocaleDateString()})</h3>
                        <div className="attendance-grid">
                            {students.map(student => (
                                <div key={student.id} className={`attendance-card ${student.status.toLowerCase()}`}>
                                    <div className="student-info">
                                        <h4>{student.name}</h4>
                                        <p>{student.sport}</p>
                                    </div>
                                    <button onClick={() => toggleAttendance(student.id)} className="status-toggle">
                                        {student.status}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'video' && (
                    <div className="video-upload-section">
                        <h3>Upload Practice Video</h3>
                        <form className="video-form" onSubmit={(e) => { e.preventDefault(); alert('Video Uploaded Successfully!'); }}>
                            <div className="form-group">
                                <label>Select Student</label>
                                <select required>
                                    <option value="">Choose Student</option>
                                    {students.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Video File</label>
                                <input type="file" accept="video/*" required />
                            </div>
                            <div className="form-group">
                                <label>Performance Notes</label>
                                <textarea rows="4" placeholder="Add specific feedback for the student..."></textarea>
                            </div>
                            <button type="submit" className="upload-btn">Finalize & Upload</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentManagement;
