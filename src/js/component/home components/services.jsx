import React from "react";



const Services = () => {

    return(
            <div className="container my-5">
        <div className="row">
            <div className="col-md-4 mb-4">
            <div className="card">
                <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Service 1"
                />
                <div className="card-body">
                <h5 className="card-title">Service 1</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    nec turpis vel est commodo consectetur.
                </p>
                </div>
            </div>
            </div>

            <div className="col-md-4 mb-4">
            <div className="card">
                <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Service 2"
                />
                <div className="card-body">
                <h5 className="card-title">Service 2</h5>
                <p className="card-text">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                </p>
                </div>
            </div>
            </div>

            <div className="col-md-4 mb-4">
            <div className="card">
                <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Service 3"
                />
                <div className="card-body">
                <h5 className="card-title">Service 3</h5>
                <p className="card-text">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    )



}

export default Services;