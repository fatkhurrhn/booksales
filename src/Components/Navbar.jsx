const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: '#2c3e50' }}>
            <div className="container">
                <a className="navbar-brand fw-bold fs-3" href="/" style={{ color: '#ecf0f1' }}>BookSalesKu</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-2">
                        <li className="nav-item">
                            <a className="nav-link active" href="/" style={{ color: '#ecf0f1' }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/team" style={{ color: '#bdc3c7' }}>Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact" style={{ color: '#bdc3c7' }}>Contact</a>
                        </li>
                        <li className="nav-item">
  <a
    href="/login"
    className="btn btn-outline-light ms-1 px-4 py-1"
    style={{ borderRadius: '50px', fontWeight: '500' }}
  >
    Login
  </a>
</li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;