const MainTeam = () => {
    return (
        <>
        <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Leadership</h2>
            <p className="text-muted">The visionaries guiding our book-loving mission</p>
          </div>
          
          <div className="row g-4 justify-content-center">
            {[
              {
                name: "Alex Johnson",
                role: "Founder & CEO",
                bio: "Book enthusiast with 15+ years in publishing industry. Believes every book finds its reader.",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                favoriteBook: "The Shadow of the Wind by Carlos Ruiz Zafón",
                social: {
                  twitter: "#",
                  linkedin: "#"
                }
              },
              {
                name: "Sarah Williams",
                role: "Chief Operations Officer",
                bio: "Ensures our operations run smoothly so you get your books fast and in perfect condition.",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                favoriteBook: "Where the Crawdads Sing by Delia Owens",
                social: {
                  twitter: "#",
                  linkedin: "#"
                }
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                bio: "Leads our tech team to create seamless shopping experiences across all devices.",
                image: "https://randomuser.me/api/portraits/men/22.jpg",
                favoriteBook: "Neuromancer by William Gibson",
                social: {
                  twitter: "#",
                  linkedin: "#"
                }
              }
            ].map((member, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card border-0 rounded-3 h-100 overflow-hidden shadow-sm hover-shadow-lg">
                  <div className="card-img-top overflow-hidden" style={{ height: "300px" }}>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="img-fluid w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title mb-1">{member.name}</h4>
                    <p className="text-primary mb-3">{member.role}</p>
                    <p className="card-text mb-4">{member.bio}</p>
                    <div className="bg-light p-3 rounded mb-3">
                      <p className="small mb-1 text-muted">Favorite Book:</p>
                      <p className="small mb-0 fw-bold">{member.favoriteBook}</p>
                    </div>
                    <div className="d-flex gap-3">
                      <a href={member.social.twitter} className="text-dark">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href={member.social.linkedin} className="text-dark">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
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

export default MainTeam;
