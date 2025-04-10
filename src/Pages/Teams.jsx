import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero from '../Components/Teams/HeroSection';
import Book from '../Components/Teams/BookCuratorsSection';
import Newsletter from '../Components/Teams/NewletterSection';
import MainTeam from '../Components/Teams/MainTeamSection';

const Team = () => {
    return (
        <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            <Navbar />
            
            {/* Hero Section */}
            <Hero />

            {/* Main Team Section */}
            <MainTeam />

            {/* Book Curators Team */}
            <Book />

            {/* Newsletter Section */}
            <Newsletter />

            <Footer />
        </div>
    );
};

export default Team;