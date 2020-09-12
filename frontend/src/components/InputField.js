import React, {Component} from 'react';
import ReactTags from "react-tag-autocomplete";
import suggestions from './Interests'

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = ({
                tags: [{ id: 1, name: 'Gaming' }], suggestions
            }
        );
        this.reactTags = React.createRef()
    }

    onDelete (i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
    }

    onAddition (tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags })
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
                    <div>
                    <label>Hobbies</label>
                    <ReactTags
                        ref={this.reactTags}
                        tags={this.state.tags}
                        suggestions={this.state.suggestions}
                        onDelete={this.onDelete.bind(this)}
                        onAddition={this.onAddition.bind(this)}
                    />
                    </div>
                </form>


                <pre><code>{JSON.stringify(this.state.tags, null, 2)}</code></pre>


            </div>
        );
    }
}

export default InputField;
