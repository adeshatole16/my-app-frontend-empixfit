import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import '../styles/dashboard.css';

const FullWidthLayout = ({ children }) => {
    return (
        <div className="full-width-layout">
            <Navbar />
            <main className="dashboard-main-full">
                <div className="container-full">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default FullWidthLayout;
