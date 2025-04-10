import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/HomePage/HeroSection';
import Books from '../Components/HomePage/BooksSection';
import SpecialDeals from '../Components/HomePage/SpecialDealsSection';
import Testi from '../Components/HomePage/TestimonialsSection';
import Newsletter from '../Components/HomePage/NewsletterSection';
import Footer from '../Components/Footer';
import CategorySection from '../Components/HomePage/CategorySection';

const HomePage = () => {
    return (
        <div className="home-page" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* Categories Section*/}
            <CategorySection />

            {/* Featured Books */}
            <Books />

            {/* Special Deals */}
            <SpecialDeals />

            {/* Testimonials */}
            <Testi />

            {/* Newsletter */}
            <Newsletter />

            {/* Footer */}
            <Footer />

            {/* Floating Action Button */}
            <div
                className="position-fixed bottom-0 end-0 m-4"
                style={{ zIndex: '1000' }}
            >
                <button
                    className="btn rounded-circle p-3 d-flex align-items-center justify-content-center"
                    style={{
                        backgroundColor: '#f1c40f',
                        color: '#2c3e50',
                        width: '60px',
                        height: '60px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <i className="bi bi-cart3 fs-4"></i>
                </button>
            </div>
        </div>
    );
};

export default HomePage;