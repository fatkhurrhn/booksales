const BooksSection = () => {
    return (
        <>
            <section id="featured" className="featured-books py-5" style={{ backgroundColor: '#ffffff' }}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2 style={{ color: '#2c3e50' }}>Featured Books</h2>
                        <a
                            href="#"
                            className="btn px-4 py-2"
                            style={{
                                backgroundColor: '#ecf0f1',
                                color: '#2c3e50',
                                borderRadius: '30px',
                                fontWeight: '600',
                                border: 'none'
                            }}
                        >
                            View All
                        </a>
                    </div>
                    <div className="row g-4">
  {[
    {
      title: 'Teruslah Bodoh Jangan Pintar',
      author: 'Tere Liye',
      price: 'Rp90.000',
      image: 'https://www.gramedia.com/blog/content/images/2024/03/Teruslah-Bodoh-Jangan-Pintar.jpg',
      rating: 4.8
    },
    {
      title: 'Parable',
      author: 'Brian Khrisna',
      price: 'Rp67.000',
      image: 'https://www.gramedia.com/blog/content/images/2024/10/Parable1.jpg',
      rating: 4.6
    },
    {
      title: 'Ayah Ini Arahnya Kemana Ya?',
      author: 'Khoirul Trian',
      price: 'Rp87.000',
      image: 'https://www.gramedia.com/blog/content/images/2024/10/Ayah--Ini-Arahnya-ke-Mana--ya.jpg',
      rating: 4.7
    },
    {
      title: 'Hidden Potential',
      author: 'Adam Grant',
      price: 'Rp180.000',
      image: 'https://www.gramedia.com/blog/content/images/2024/10/Hidden-Potential.jpg',
      rating: 4.9
    }
  ].map((book, index) => (
    <div key={index} className="col-6 col-md-4 col-lg-3">
      <div
        className="card h-100 border-0 p-3 d-flex flex-column justify-content-between"
        style={{
          borderRadius: '15px',
          transition: 'transform 0.3s',
          cursor: 'pointer',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <div>
          <div className="position-relative">
            <img
              src={book.image}
              className="card-img-top"
              alt={book.title}
              style={{
                height: '250px',
                objectFit: 'contain',
                borderRadius: '10px'
              }}
            />
            <div
              className="position-absolute top-0 end-0 bg-warning text-dark px-2 py-1 rounded m-2"
              style={{ fontSize: '0.8rem' }}
            >
              {book.rating}★
            </div>
          </div>
          <div className="card-body px-0">
            <h6 className="card-title fw-bold mb-1">{book.title}</h6>
            <p className="mb-1 text-muted" style={{ fontSize: '0.9rem' }}>{book.author}</p>
            <p className="fw-semibold text-primary">{book.price}</p>
          </div>
        </div>
        <button className="btn btn-sm btn-primary mt-auto w-100">Add to Cart</button>
      </div>
    </div>
  ))}
</div>

                </div>
            </section>
        </>
    );
};

export default BooksSection;
