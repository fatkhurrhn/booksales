const Hero = () => {
    return (
        <>
        <section className=" text-white pt-5" style={{ 
        background: 'linear-gradient(135deg, #3498db 0%, #2c3e50 100%)',
        color: '#ecf0f1',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container py-5">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Meet Our Team</h1>
              <p className="lead mb-4">
                The passionate book lovers who make BookSales possible. We're dedicated to connecting readers with their next favorite book.
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
    );
};

export default Hero;
