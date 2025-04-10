import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero from '../Components/Contact/HeroSection';
import Form from '../Components/Contact/FormSection';
import Faq from '../Components/Contact/FaqSection';

const Contact = () => {
    return (
        <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
            <Navbar />
            
            {/* Hero Section */}
            <Hero />

            {/* Contact Form + Information Section */}
            <Form />

            {/* FAQ Section */}
            <Faq />

            <Footer />
        </div>
    );
};

export default Contact;