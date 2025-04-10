const Footer = () => {
    return (
        <>
            <footer className="py-5" style={{ backgroundColor: '#2c3e50', color: '#ecf0f1' }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <h5 className="mb-4 fs-4">BookSales</h5>
                            <p style={{ opacity: '0.8' }}>
                                Your gateway to endless stories. We're passionate about connecting readers with their next favorite book.
                            </p>
                            <div className="social-icons mt-4">
                                <a href="#" className="text-white me-3" style={{ fontSize: '1.2rem' }}><i className="bi bi-facebook"></i></a>
                                <a href="#" className="text-white me-3" style={{ fontSize: '1.2rem' }}><i className="bi bi-twitter"></i></a>
                                <a href="#" className="text-white me-3" style={{ fontSize: '1.2rem' }}><i className="bi bi-instagram"></i></a>
                                <a href="#" className="text-white me-3" style={{ fontSize: '1.2rem' }}><i className="bi bi-goodreads"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <h5 className="mb-4">Explore</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{ opacity: '0.8' }}>Home</a></li>
                                <li className="mb-2"><a href="/team" className="text-white text-decoration-none" style={{ opacity: '0.8' }}>Our Team</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{ opacity: '0.8' }}>Best Sellers</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{ opacity: '0.8' }}>New Releases</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <h5 className="mb-4">Help</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{ opacity: '0.8' }}>Customer Service</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{ opacity: '0.8' }}>Shipping Info</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-decoration-none" style={{ opacity: '0.8' }}>Returns & Exchanges</a></li>
                                <li className="mb-2"><a href="/contact" className="text-white text-decoration-none" style={{ opacity: '0.8' }}>Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <h5 className="mb-4">Contact</h5>
                            <ul className="list-unstyled" style={{ opacity: '0.8' }}>
                                <li className="mb-2 d-flex align-items-center">
                                    <i className="bi bi-geo-alt me-2"></i>
                                    <span>123 Book St, Reading, UK</span>
                                </li>
                                <li className="mb-2 d-flex align-items-center">
                                    <i className="bi bi-telephone me-2"></i>
                                    <span>+1 234 567 890</span>
                                </li>
                                <li className="mb-2 d-flex align-items-center">
                                    <i className="bi bi-envelope me-2"></i>
                                    <span>hello@booksales.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                    <div className="text-center" style={{ opacity: '0.7' }}>
                        <p className="mb-0">&copy; {new Date().getFullYear()} BookSalesKu. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
