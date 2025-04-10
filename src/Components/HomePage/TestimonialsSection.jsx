const TestiSection = () => {
    return (
        <>
            <section className="testimonials py-5" style={{ backgroundColor: '#ffffff' }}>
                <div className="container">
                    <h2 className="text-center mb-5" style={{ color: '#2c3e50' }}>What Our Readers Say</h2>
                    <div className="row g-4">
                        {[
                            {
                                name: 'Sarah Johnson',
                                comment: 'The best online bookstore I\'ve used! Fast delivery and great selection. Found all my book club picks here.',
                                rating: 5,
                                avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
                            },
                            {
                                name: 'Michael Chen',
                                comment: 'Found rare books here that I couldn\'t find anywhere else. Customer service is exceptional!',
                                rating: 4,
                                avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
                            },
                            {
                                name: 'Emma Williams',
                                comment: 'Excellent prices and frequent sales. My go-to place for all my reading needs. Highly recommend!',
                                rating: 5,
                                avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
                            },
                        ].map((testimonial, index) => (
                            <div key={index} className="col-md-4">
                                <div
                                    className="card h-100 border-0 p-4"
                                    style={{
                                        borderRadius: '15px',
                                        backgroundColor: '#f8f9fa',
                                        transition: 'transform 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <div className="d-flex mb-3 text-warning">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <i
                                                key={i}
                                                className={`bi ${i < testimonial.rating ? 'bi-star-fill' : 'bi-star'}`}
                                            ></i>
                                        ))}
                                    </div>
                                    <p className="fst-italic mb-4" style={{ color: '#7f8c8d' }}>"{testimonial.comment}"</p>
                                    <div className="d-flex align-items-center mt-auto">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="rounded-circle me-3"
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                        />
                                        <div>
                                            <p className="fw-bold mb-0" style={{ color: '#2c3e50' }}>{testimonial.name}</p>
                                            <small className="text-muted">Verified Buyer</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestiSection;
