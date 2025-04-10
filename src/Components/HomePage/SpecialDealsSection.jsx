const SpecialDealsSection = () => {
    return (
        <>
            <section id="deals" className="special-deals py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 className="text-center mb-5" style={{ color: '#2c3e50' }}>Today's Special Deals</h2>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div
                                className="p-5 rounded-4 text-white"
                                style={{
                                    background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                                    height: '100%',
                                    transition: 'transform 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-white text-danger rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <span className="fw-bold">30%</span>
                                    </div>
                                    <h3 className="ms-3 mb-0">Weekend Sale!</h3>
                                </div>
                                <p className="fs-5 mb-4" style={{ opacity: '0.9' }}>Get 30% off on all fiction books this weekend only. Use code: <strong>READ30</strong></p>
                                <button
                                    className="btn btn-light px-4 py-2"
                                    style={{
                                        borderRadius: '30px',
                                        fontWeight: '600',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1c40f'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                >
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="p-5 rounded-4 text-white"
                                style={{
                                    background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
                                    height: '100%',
                                    transition: 'transform 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div className="d-flex align-items-center mb-3">
                                    <div className="bg-white text-success rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <span className="fw-bold">B2G1</span>
                                    </div>
                                    <h3 className="ms-3 mb-0">Buy 2 Get 1 Free</h3>
                                </div>
                                <p className="fs-5 mb-4" style={{ opacity: '0.9' }}>Select biographies and memoirs included in this limited time offer.</p>
                                <button
                                    className="btn btn-light px-4 py-2"
                                    style={{
                                        borderRadius: '30px',
                                        fontWeight: '600',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1c40f'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                >
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpecialDealsSection;
