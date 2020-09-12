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
        this.handleChange = this.handleChange.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    getOutputJSON() {
        return {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            hobbies: this.state.hobbies,
            courses: this.state.courses
        }
    }

    onClickSubmit(){
        console.log(JSON.stringify(this.getOutputJSON()))
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

    handleChange(i, event){
        this.setState({[i]: event.target.value})
    }

    render() {
        return (
            <div className="col-md-8">
                <h4 className="mb-3">Details</h4>
                <form className="needs-validation" noValidate="" autocomplete="off">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" value= {this.state.firstName} onChange={(e) => this.handleChange('firstName', e)} className="form-control" id="firstName" placeholder=""
                                   required=""/>
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" value= {this.state.lastName} onChange={(e) => this.handleChange('lastName', e)} className="form-control" id="lastName" placeholder=""
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
                            <input type="text" value ={this.state.username} onChange={(e) => this.handleChange('username', e)} className="form-control" id="username" placeholder="Username"
                                   required=""/>
                            <div className="invalid-feedback">
                                Your username is required.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" value ={this.state.email} onChange={(e) => this.handleChange('email', e)} className="form-control" id="email" placeholder="you@example.com"/>
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Phone Number</label>
                        <input type="number" value ={this.state.phoneNumber} onChange={(e) => this.handleChange('phoneNumber', e)} className="form-control" id="phone" placeholder="(###)###-####"/>
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
                    <button type="button" className="btn btn-lg btn-block btn-primary mb-5" onClick={this.onClickSubmit}>Submit</button>
                </form>

            </div>
        );
    }
}

export default InputField;
