const CategorySection = () => {
    // Helper function for rgba colors
    function hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return (
        <>
            <section className="categories py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 className="text-center mb-5" style={{ color: '#2c3e50' }}>Popular Categories</h2>
                    <div className="row g-4">
                        {[
                            { name: 'Fiction', icon: '📚', color: '#3498db' },
                            { name: 'Sci-Fi', icon: '🚀', color: '#9b59b6' },
                            { name: 'Biography', icon: '👤', color: '#e74c3c' },
                            { name: 'Self-Help', icon: '💪', color: '#2ecc71' },
                            { name: 'Business', icon: '💼', color: '#f39c12' },
                            { name: 'Romance', icon: '❤️', color: '#e84393' },
                        ].map((category, index) => (
                            <div key={index} className="col-6 col-md-4 col-lg-2">
                                <div
                                    className="card h-100 border-0 text-center p-3"
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: '15px',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        cursor: 'pointer',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = `0 15px 30px ${hexToRgba(category.color, 0.1)}`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                                    }}
                                >
                                    <div
                                        className="fs-1 mb-2"
                                        style={{
                                            color: category.color,
                                            fontSize: '2.5rem'
                                        }}
                                    >
                                        {category.icon}
                                    </div>
                                    <h5 className="mb-0" style={{ color: '#2c3e50' }}>{category.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CategorySection;
