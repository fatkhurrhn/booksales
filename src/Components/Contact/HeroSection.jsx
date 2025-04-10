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
                            <h1 className="display-4 fw-bold mb-4">Get In Touch</h1>
                            <p className="lead mb-4">
                                We'd love to hear from you! Whether you have a question about our books, need support,
                                or just want to share your reading experience, reach out to us.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;