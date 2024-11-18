import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../css/carousel.css';

function Carousel_nav() {
    return (
        <>
            <div className="container">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/300x200?text=Item+1" className="card-img-top" alt="Item 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">Item 1</h5>
                                            <p className="card-text">Some content for Item 1.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/300x200?text=Item+2" className="card-img-top" alt="Item 2" />
                                        <div className="card-body">
                                            <h5 className="card-title">Item 2</h5>
                                            <p className="card-text">Some content for Item 2.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/300x200?text=Item+3" className="card-img-top" alt="Item 3" />
                                        <div className="card-body">
                                            <h5 className="card-title">Item 3</h5>
                                            <p className="card-text">Some content for Item 3.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/300x200?text=Item+4" className="card-img-top" alt="Item 4" />
                                        <div className="card-body">
                                            <h5 className="card-title">Item 4</h5>
                                            <p className="card-text">Some content for Item 4.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/300x200?text=Item+5" className="card-img-top" alt="Item 5" />
                                        <div className="card-body">
                                            <h5 className="card-title">Item 5</h5>
                                            <p className="card-text">Some content for Item 5.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card">
                                        <img src="https://via.placeholder.com/300x200?text=Item+6" className="card-img-top" alt="Item 6" />
                                        <div className="card-body">
                                            <h5 className="card-title">Item 6</h5>
                                            <p className="card-text">Some content for Item 6.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-class">
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    
                </div>
            </div>

        </>
    );
}

export default Carousel_nav;
