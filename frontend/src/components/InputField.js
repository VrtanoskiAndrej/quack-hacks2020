import React, {Component} from 'react';
import ReactTags from "react-tag-autocomplete";
import hobbySuggestions from './Interests';
import courseSuggestions from  './Courses';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = ({
                hobbies: [{ id: 1, name: 'Gaming' }], hobbySuggestions, courses: [{ id: 0, name: "CS 1301"}], courseSuggestions
            }
        );
        this.reactTags = React.createRef()
    }

    onDeleteHobbies (i) {
        const tags = this.state.hobbies.slice(0)
        tags.splice(i, 1)
        this.setState({hobbies: tags })
    }

    onAdditionHobbies (tag) {
        const tags = [].concat(this.state.hobbies, tag)
        this.setState({ hobbies: tags })
    }

    onDeleteCourses (i) {
        const tags = this.state.courses.slice(0)
        tags.splice(i, 1)
        this.setState({courses: tags })
    }

    onAdditionCourses (tag) {
        const tags = [].concat(this.state.courses, tag)
        this.setState({courses: tags })
    }


    render() {
        return (
            <div className="col-md-8">
                <h4 className="mb-3">Details</h4>
                <form className="needs-validation" noValidate="">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                   required=""/>
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                   required=""/>
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" id="username" placeholder="Username"
                                   required=""/>
                            <div className="invalid-feedback">
                                Your username is required.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>
                    <div className="mb-3">
                    <label>Hobbies</label>
                    <ReactTags
                        ref={this.reactTags}
                        tags={this.state.hobbies}
                        suggestions={this.state.hobbySuggestions}
                        onDelete={this.onDeleteHobbies.bind(this)}
                        onAddition={this.onAdditionHobbies.bind(this)}
                    />
                    </div>
                    <div className="mb-3">
                        <label>Courses</label>
                        <ReactTags
                            ref={this.reactTags}
                            tags={this.state.courses}
                            suggestions={this.state.courseSuggestions}
                            onDelete={this.onDeleteCourses.bind(this)}
                            onAddition={this.onAdditionCourses.bind(this)}
                        />
                    </div>
                </form>


                <pre><code>{JSON.stringify(this.state.hobbies, null, 2)}</code></pre>
                <pre><code>{JSON.stringify(this.state.courses, null, 2)}</code></pre>


            </div>
        );
    }
}

export default InputField;
