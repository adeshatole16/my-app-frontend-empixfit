import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import SearchBar from '../components/SearchBar';
import SportCard from '../components/SportCard';
import '../styles/event.css';

const sportsData = [
    {
        name: "Cricket",
        description: "Master the gentleman's game with our professional coaching and world-class practice pitches.",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Football",
        description: "Join our elite football academy to enhance your tactical skills and physical conditioning.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Kabaddi",
        description: "Experience the thrill of traditional sports with modern training techniques and professional mats.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Athletics",
        description: "Run, jump, and throw your way to excellence on our professional synthetic athletic tracks.",
        image: "https://dotorg.brightspotcdn.com/dims4/default/39e029e/2147483647/strip/true/crop/6048x4024+0+0/resize/620x413!/quality/90/?url=http%3A%2F%2Fsoi-brightspot.s3.amazonaws.com%2Fdotorg%2Fb6%2Fb1%2Ff38ef300419b952fe400cd32e72d%2Ftabo-nyumbu-zambia-1633-cristopher-jose-jimenez-dominican-rep-1151-emomov-abdulhamid-tajikistan-1554-berlin-athletics-2882.jpg"
    },
    {
        name: "Badminton",
        description: "Perfect your smash on our premium wooden indoor courts with expert technical guidance.",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Tennis",
        description: "Train on clay or hard courts with state-of-the-art ball machines and pro-circuit coaches.",
        image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Hockey",
        description: "Dribble your way to victory on our international-standard astro-turf hockey fields.",
        image: "https://cdn.britannica.com/15/201015-050-E24FA163/Field-hockey-match-Poland-Spain-2017.jpg"
    },
    {
        name: "Basketball",
        description: "Develop your court vision and shooting accuracy on our high-performance indoor arenas.",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Volleyball",
        description: "Master team coordination and power serving on our professional indoor and beach courts.",
        image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Table Tennis",
        description: "Enhance your reflexes and spin control with our top-tier tables and multi-ball training.",
        image: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=800&q=80"
    }
];

const Event = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const orderedSports = useMemo(() => {
        if (!searchTerm.trim()) return sportsData;

        const term = searchTerm.toLowerCase();

        // Sort logic: matched items come first, then everything else
        // We maintain the original order within categories
        const matches = sportsData.filter(s => s.name.toLowerCase().includes(term));
        const nonMatches = sportsData.filter(s => !s.name.toLowerCase().includes(term));

        return [...matches, ...nonMatches];
    }, [searchTerm]);

    return (
        <div className="event-page">
            <Navbar />
            <div className="container">
                <div className="event-header reveal active">
                    <span className="hero-subtitle">Upcoming Events</span>
                    <h1>Sports Programs</h1>
                    <p>Find and join the perfect sports program for your athletic development.</p>
                </div>

                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                />

                <div className="sports-grid">
                    {orderedSports.map((sport, index) => (
                        <SportCard
                            key={sport.name}
                            sportName={sport.name}
                            sportImage={sport.image}
                            sportDescription={sport.description}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Event;
