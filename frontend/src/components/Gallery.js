import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {shown: false};
    }
    render() {
        return (
            <div className="card-deck mb-3 text-center">
                <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Name 1</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">32 <small className="text-muted">/ score</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Loves Football</li>
                            <li>Shared CS 1331 Class</li>
                            <li>Interested in cooking</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-primary">Contact Now</button>
                    </div>
                </div>
                <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">John Doe</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">52 <small className="text-muted">/ score</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Loves Rugby</li>
                            <li>Shared ENG 1101 class</li>
                            <li>Interested in robotics</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-primary">Contact Now</button>
                    </div>
                </div>
                <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Name 3</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">38 <small className="text-muted">/ score</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>Business Major</li>
                            <li>Loves crochet</li>
                            <li>Interested in cooking</li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-block btn-primary">Contact Now</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;






