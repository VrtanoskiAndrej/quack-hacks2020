import React, {Component} from 'react';
import InputField from "./components/InputField";
import './App.css';
import Gallery from "./components/Gallery";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {showLogin: false, showGallery: false};
        this.showLoginStateHandler = this.showLoginStateHandler.bind(this);
        this.showGalleryStateHandler = this.showGalleryStateHandler.bind(this);
    }

    showLoginStateHandler(){
        this.setState(prevState => ({
            showLogin: !prevState.showLogin
        }));
    }

    showGalleryStateHandler(){
        this.setState(prevState => ({
            showGallery: !prevState.showGallery
        }));
    }


    render() {
        return (
            <div className="App">
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <i className="fa fa-users mr-2"></i>
                            <strong>Acquaint - QuackHacks 2020</strong>
                        </a>
                    </div>
                </div>
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Create a profile and get to know people</h1>
                        <p className="lead text-muted">Meet hundereds of people around campus that share your similar interests. Setup your Acquaint account below and get the opportunity to share your experience with many others.</p>
                        <p>
                            <button onClick={this.showLoginStateHandler} className="btn btn-lg btn-danger">Try Now</button>
                        </p>
                    </div>
                </section>
                { this.state.showLogin ?
                <div className='container d-flex justify-content-center'>
                    <InputField/>
                </div> : null}
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Find people with similar interests</h1>
                        <p className="lead text-muted">Our intelligent algorithm hand selects through hundreds of people with similar interests and similar scheduals as you, allowing you to meet new people and socialize at a distance. </p>
                        <p>
                            <button onClick={this.showGalleryStateHandler} className="btn btn-lg btn-primary">Find My Matches</button>
                        </p>
                    </div>
                </section>
                { this.state.showGallery ?
                    <div className='container d-flex justify-content-center'>
                        <Gallery/>
                    </div> : null}

            </div>
        );
    }
}

export default App;
