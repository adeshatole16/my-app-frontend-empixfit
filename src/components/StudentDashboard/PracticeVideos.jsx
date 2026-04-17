import React from 'react';

const PracticeVideos = () => {
    const videos = [
        { title: "Mastering the Cover Drive", thumb: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80" },
        { title: "Bowling Length Drills", thumb: "https://images.unsplash.com/photo-1540747913346-19e3adca174f?auto=format&fit=crop&w=800&q=80" },
        { title: "Fielding Agility Session", thumb: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80" }
    ];

    return (
        <div className="practice-videos-section">
            <h2>Practice Videos</h2>
            <div className="videos-grid">
                {videos.map((video, index) => (
                    <div key={index} className="video-card" onClick={() => alert(`Playing: ${video.title}`)}>
                        <div className="video-thumb" style={{ backgroundImage: `url(${video.thumb})` }}>
                            <div className="play-btn">▶</div>
                        </div>
                        <div className="video-info">
                            <h4>{video.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PracticeVideos;
