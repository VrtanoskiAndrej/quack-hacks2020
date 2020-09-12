import React, {Component} from 'react';
import ReactTags from "react-tag-autocomplete";
import hobbySuggestions from './Interests';
import courseSuggestions from  './Courses';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = ({
                hobbies: [{ id: 1, name: 'Gaming' }], hobbySuggestions, courses: [{ id: 0, name: "CS 1301"}], courseSuggestions, email: "", username:"", firstName:"", lastName:"",phoneNumber:""
            }
        );
        this.reactTags = React.createRef()
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
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
    handleChangeEmail(event) {
    this.setState({email: event.target.value});
    }
    handleChangeUsername(event) {
    this.setState({username: event.target.value});
    }
    handleChangeFirstName(event) {
    this.setState({firstName: event.target.value});
    }
    handleChangeLastName(event) {
    this.setState({lastName: event.target.value});
    }
    handleChangePhoneNumber(event) {
    this.setState({phoneNumber: event.target.value});
    }


    render() {
        return (
            <div className="col-md-8">
                <h4 className="mb-3">Details</h4>
                <form className="needs-validation" noValidate="">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" value= {this.state.firstName} onChange={this.handleChangeFirstName} className="form-control" id="firstName" placeholder=""
                                   required=""/>
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" value= {this.state.lastName} onChange={this.handleChangeLastName} className="form-control" id="lastName" placeholder=""
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
                            <input type="text" value ={this.state.username} onChange={this.handleChangeUsername} className="form-control" id="username" placeholder="Username"
                                   required=""/>
                            <div className="invalid-feedback">
                                Your username is required.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" value ={this.state.email} onChange={this.handleChangeEmail} className="form-control" id="email" placeholder="you@example.com"/>
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Phone Number</label>
                        <input type="number" value ={this.state.phoneNumber} onChange={this.handleChangePhoneNumber} className="form-control" id="phone" placeholder="(###)###-####"/>
                        <div className="invalid-feedback">
                            Please enter a valid phone number for mobile updates.
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

{this.state.email}{this.state.username}
            </div>
        );
    }
}

export default InputField;
