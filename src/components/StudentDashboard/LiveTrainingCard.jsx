
import React, { useEffect, useState } from 'react';
import { checkLiveSession } from '../../api/liveApi';

const LiveTrainingCard = () => {
    const [liveSession, setLiveSession] = useState(null);
    useEffect(() => {

    const student = JSON.parse(localStorage.getItem("user"));

    if (student?.academyId) {

        checkLiveSession(student.academyId)
            .then(data => {
                setLiveSession(data);
            })
            .catch(err => {
                console.error("Live session error:", err);
            });

    }

}, []);
    const handleJoinClick = () => {

    if(liveSession?.streamUrl){
        window.open(liveSession.streamUrl, "_blank");
    } else {
        alert("Live session link not available");
    }

};

    return (
        <div className="training-status-row">
            <div className="live-training-card">

{liveSession ? (
    <>
        <button className="join-live-btn" onClick={handleJoinClick}>
            Join Live Training
        </button>
        <p className="student-dashboard-text-muted">
            Live session is active now!
        </p>
    </>
) : (
    <p className="student-dashboard-text-muted">
        No live training session currently
    </p>
)}

</div>

            <div className="next-schedule-card">
                <span className="schedule-title">Training Schedule</span>
                <span className="schedule-time">Today, 5:00 PM</span>
                <div className="schedule-highlight">
                    Starts in: 02h 15m 30s
                </div>
            </div>
        </div>
    );
};

export default LiveTrainingCard;
