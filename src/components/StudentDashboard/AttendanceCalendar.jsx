import React, { useEffect, useState } from 'react';
import { getStudentAttendance } from "../../api/attendanceApi";
const AttendanceCalendar = () => {
    // Mock data for attended dates
const [attendedDates, setAttendedDates] = useState([]);
const [month, setMonth] = useState(new Date().getMonth());
const [year, setYear] = useState(new Date().getFullYear());
    
useEffect(() => {

    const student = JSON.parse(localStorage.getItem("user"));

    if (student?.id) {

        getStudentAttendance(student.id, month + 1, year)
            .then(data => {

                const days = data
                    .filter(record => record.status === "PRESENT")
                    .map(record => new Date(record.date).getDate());

                setAttendedDates(days);

            })
            .catch(err => console.error(err));

    }

}, [month, year]);

    const daysInMonth = 31;
    const monthName = "March 2026";
    const startDay = 0; // Sunday

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className="attendance-card">
            <div className="calendar-widget">
                <div className="calendar-header">

    <button onClick={() => setMonth(month - 1)}>◀</button>

    <span>
        {new Date(year, month).toLocaleString("default", { month: "long" })} {year}
    </span>

    <button onClick={() => setMonth(month + 1)}>▶</button>

</div>
                <div className="calendar-grid">
                    {dayLabels.map(label => (
                        <div key={label} className="calendar-day-header">{label}</div>
                    ))}
                    {Array(startDay).fill(null).map((_, i) => (
                        <div key={`empty-${i}`} className="calendar-day empty"></div>
                    ))}
                    {days.map(day => (
                        <div
                            key={day}
                            className={`calendar-day ${attendedDates.includes(day) ? 'attended' : ''}`}
                        >
                            {day}
                        </div>
                    ))}
                </div>
                <div className="legend">
                    <div className="legend-item">
                        <span className="legend-dot-success"></span>
                        <span>Practice completed</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceCalendar;
