import React, {Component} from 'react';
import InputField from "./components/InputField";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar navbar-dark bg-dark shadow-sm">
                    <div className="container d-flex justify-content-between">
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <i className="fa fa-users mr-2"></i>
                            <strong>Quack</strong>
                        </a>
                    </div>
                </div>
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1>Find people with similar interests</h1>
                        <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                            ultrices pellentesque diam ac dapibus. Maecenas finibus vehicula viverra. In hac habitasse
                            platea dictumst. In rutrum finibus congue. Sed nec purus scelerisque, fermentum urna vitae,
                            varius erat. Nam faucibus magna vel sem condimentum pulvinar id eu augue. Nunc euismod
                            blandit congue. Etiam nec dui at nisi eleifend iaculis. </p>
                        <p>
                            <a href="#" className="btn btn-primary">Try now</a>
                        </p>
                    </div>
                </section>
                <div className='container d-flex justify-content-center'>
                    <InputField/>
                </div>
            </div>
        );
    }
}

export default App;
