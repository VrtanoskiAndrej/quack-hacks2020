import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {shown: false};
    }

    render() {
        return (
            <div className="album py-5">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                     xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                     focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"></rect>
                                </svg>
                                <div className="card-body">
                                    <p className="card-text"><strong>Wil Camacho.</strong></p>
                                    <p className="card-text">Passionate about video games. Loves long walks on the beach. Shares both CS1331 and CS 1101 with you.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Contact
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                     xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                     focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"></rect>
                                </svg>
                                <div className="card-body">
                                    <p className="card-text"><strong>Tiya Sellers. </strong></p>
                                    <p className="card-text">Talented volleyball player. Passionate about crochet. Shares ENG 1101 with you.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Contact
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                     xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                     focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"></rect>
                                </svg>
                                <div className="card-body">
                                    <p className="card-text"><strong>Rumaysa Khan. </strong></p>
                                    <p className="card-text">Hobbies include rocket building, crafts and cooking. Shares MATH 1551 and CS 1101 with you.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Contact
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;






