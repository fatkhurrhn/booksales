const BookCurator = () => {
    return (
        <>
        <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Book Curators</h2>
            <p className="text-muted">The experts who help you discover your next great read</p>
          </div>
          
          <div className="row g-4">
            {[
              {
                name: "Emily Rodriguez",
                specialty: "Fiction & Literature",
                quote: "A great book should leave you with many experiences, and slightly exhausted at the end.",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
              },
              {
                name: "David Kim",
                specialty: "Science & Technology",
                quote: "Science books make the complex understandable and the unimaginable possible.",
                image: "https://randomuser.me/api/portraits/men/75.jpg"
              },
              {
                name: "Priya Patel",
                specialty: "History & Biography",
                quote: "History books are time machines that transport us to different eras and perspectives.",
                image: "https://randomuser.me/api/portraits/women/63.jpg"
              },
              {
                name: "James Wilson",
                specialty: "Mystery & Thriller",
                quote: "A good mystery novel keeps you guessing until the very last page.",
                image: "https://randomuser.me/api/portraits/men/81.jpg"
              }
            ].map((curator, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card border-0 rounded-3 h-100 overflow-hidden bg-white shadow-sm">
                  <div className="card-body text-center p-4">
                    <img 
                      src={curator.image} 
                      alt={curator.name} 
                      className="rounded-circle mb-3" 
                      width="120"
                      height="120"
                      style={{ objectFit: "cover" }}
                    />
                    <h5 className="mb-1">{curator.name}</h5>
                    <p className="text-primary small mb-3">{curator.specialty}</p>
                    <p className="card-text text-muted fst-italic">"{curator.quote}"</p>
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

export default BookCurator;
