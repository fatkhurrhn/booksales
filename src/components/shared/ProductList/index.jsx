import { Link } from "react-router";
import books from "../../../Utils/books";

export default function ProductList() {
    return (
      <>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <Link to="#" className="btn btn-primary my-2 m-2">
                  Views
                </Link>
                <Link to="#" className="btn btn-secondary my-2">
                  Other Book
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {books.map((book) => (
              <div key={book.id} className="col">
                <div className="card shadow-sm">
                <img className="w-[100px] h-[40px] object-cover rounded-lg" src={book.image} alt="Foto Buku" />
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">
                    {book.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="btn-group">
                        <p>{book.author}</p>
                      </div>
                      <small className="text-body-secondary">{book.year}</small>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
}