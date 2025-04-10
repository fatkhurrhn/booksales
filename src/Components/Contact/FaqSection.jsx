const FAQ = () => {
    return (
        <>
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Frequently Asked Questions</h2>
                        <p className="text-muted">Find quick answers to common questions</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion" id="faqAccordion">
                                {[
                                    {
                                        question: "How long does shipping take?",
                                        answer: "Standard shipping typically takes 3-5 business days within Indonesia. For international orders, delivery times vary by destination but usually range from 7-14 business days. Expedited shipping options are available at checkout."
                                    },
                                    {
                                        question: "What is your return policy?",
                                        answer: "We accept returns within 30 days of purchase for books in their original condition. Please contact our customer service team to initiate a return. Digital products and personalized items are non-refundable."
                                    },
                                    {
                                        question: "Do you offer international shipping?",
                                        answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination. You'll see the exact shipping costs during checkout before completing your purchase."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="accordion-item border-0 rounded-3 shadow-sm mb-3 overflow-hidden">
                                        <h3 className="accordion-header" id={`heading${index}`}>
                                            <button
                                                className="accordion-button collapsed bg-white"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${index}`}
                                                aria-expanded="false"
                                                aria-controls={`collapse${index}`}
                                            >
                                                {item.question}
                                            </button>
                                        </h3>
                                        <div
                                            id={`collapse${index}`}
                                            className="accordion-collapse collapse"
                                            aria-labelledby={`heading${index}`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body bg-white">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;