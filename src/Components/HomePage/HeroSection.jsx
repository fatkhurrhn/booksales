const HeroSection = () => {
    return (
        <>
        <header className="hero-section" style={{ 
        background: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)',
        color: '#ecf0f1',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ lineHeight: '1.3' }}>
                Dive Into Worlds <br/>
                <span style={{ color: '#f1c40f' }}>Between The Pages</span>
              </h1>
              <p className="lead mb-4" style={{ fontSize: '1.2rem', opacity: '0.9' }}>
                Discover millions of stories waiting for you. Get your favorite books delivered to your doorstep with our fast and reliable service.
              </p>
              <div className="d-flex gap-3">
                <a 
                  href="#featured" 
                  className="btn btn-lg px-4 py-2" 
                  style={{ 
                    backgroundColor: '#f1c40f', 
                    color: '#2c3e50',
                    border: 'none',
                    borderRadius: '30px',
                    fontWeight: '600',
                    boxShadow: '0 4px 15px rgba(241, 196, 15, 0.3)'
                  }}
                >
                  Explore Books
                </a>
                <a 
                  href="#deals" 
                  className="btn btn-outline-light btn-lg px-4 py-2" 
                  style={{ 
                    borderRadius: '30px',
                    fontWeight: '600'
                  }}
                >
                  Special Offers
                </a>
              </div>
              <div className="mt-4 d-flex align-items-center">
                <div className="d-flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="bi bi-star-fill text-warning me-1"></i>
                  ))}
                </div>
                <span className="ms-2">Rated 4.9/5 by 10,000+ readers</span>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div style={{
                position: 'relative',
                animation: 'float 6s ease-in-out infinite'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Happy reader" 
                  className="img-fluid rounded shadow"
                  style={{
                    border: '5px solid #ecf0f1',
                    transform: 'rotate(5deg)',
                    zIndex: '1',
                    position: 'relative'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#f1c40f',
                  top: '15px',
                  left: '15px',
                  borderRadius: '8px',
                  transform: 'rotate(5deg)',
                  zIndex: '0'
                }}></div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '100px',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.1) 100%)'
        }}></div>
      </header>
        </>
    );
};

export default HeroSection;
