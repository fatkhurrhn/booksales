const NewsletterSection = () => {
    return (
        <>
            <section className="newsletter py-5" style={{ backgroundColor: '#3498db' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center text-white">
                            <h2 className="mb-4">Join Our Reading Community</h2>
                            <p className="mb-4" style={{ opacity: '0.9', fontSize: '1.1rem' }}>
                                Subscribe to get exclusive deals, new release alerts, and reading recommendations straight to your inbox.
                            </p>
                            <form className="row g-2 justify-content-center">
                                <div className="col-md-8">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="Your email address"
                                        style={{ borderRadius: '30px', border: 'none', padding: '12px 20px' }}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <button
                                        type="submit"
                                        className="btn btn-lg w-100"
                                        style={{
                                            backgroundColor: '#f1c40f',
                                            color: '#2c3e50',
                                            borderRadius: '30px',
                                            fontWeight: '600',
                                            border: 'none'
                                        }}
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                            <small className="d-block mt-3" style={{ opacity: '0.7' }}>
                                We respect your privacy. Unsubscribe at any time.
                            </small>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsletterSection;
