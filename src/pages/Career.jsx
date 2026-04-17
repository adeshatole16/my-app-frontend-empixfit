import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CareerHero from '../components/CareerHero';
import SportCareerCard from '../components/SportCareerCard';
import WhyJoinSection from '../components/WhyJoinSection';
import CommunitySection from '../components/CommunitySection';
import '../styles/career.css';

const careerData = [
    {
        name: "Cricket Coach",
        description: "Lead our cricket academy and train the next generation of top-tier batsmen and bowlers.",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Football Coach",
        description: "Develop tactical excellence and teamwork in our elite youth football programs.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Kabaddi Coach",
        description: "Bring traditional power and strategy to our professional kabaddi training sessions.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Athletics Coach",
        description: "Push the limits of human performance on our professional синтетический tracks.",
        image: "https://dotorg.brightspotcdn.com/dims4/default/39e029e/2147483647/strip/true/crop/6048x4024+0+0/resize/620x413!/quality/90/?url=http%3A%2F%2Fsoi-brightspot.s3.amazonaws.com%2Fdotorg%2Fb6%2Fb1%2Ff38ef300419b952fe400cd32e72d%2Ftabo-nyumbu-zambia-1633-cristopher-jose-jimenez-dominican-rep-1151-emomov-abdulhamid-tajikistan-1554-berlin-athletics-2882.jpg"
    },
    {
        name: "Badminton Coach",
        description: "Master the art of the smash and quick reflexes in our premium indoor badminton facilities.",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Tennis Coach",
        description: "Train future champions on our professional clay and hard courts with elite equipment.",
        image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80"
    }
];

const Career = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeSearch, setActiveSearch] = useState("");

    const orderedCareers = useMemo(() => {
        if (!activeSearch.trim()) return careerData;

        const term = activeSearch.toLowerCase();
        const matches = careerData.filter(c => c.name.toLowerCase().includes(term));
        const nonMatches = careerData.filter(c => !c.name.toLowerCase().includes(term));

        return [...matches, ...nonMatches];
    }, [activeSearch]);

    const handleSearchClick = () => {
        setActiveSearch(searchTerm);
    };

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(reveal => observer.observe(reveal));

        return () => observer.disconnect();
    }, [orderedCareers]); // Re-observe when cards are reordered

    return (
        <div className="career-page">
            <Navbar />
            <CareerHero
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onSearchClick={handleSearchClick}
            />

            <section className="career-cards-container">
                <div className="container">
                    <div className="career-cards-grid">
                        {orderedCareers.map((career) => (
                            <SportCareerCard
                                key={career.name}
                                sportName={career.name}
                                sportImage={career.image}
                                sportDescription={career.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <WhyJoinSection />
            <CommunitySection />
            <Footer />
        </div>
    );
};

export default Career;
