import React from 'react';
import '../assets/styles/templates/contactform.scss';


class TemplateContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            message: null
        }
    }



    render() {
        return (
            <form className="contact-form">
                <div className="form-group">
                    <h2>Contact us</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label><br />
                    <input type="text" value={this.state.name} className="form-control" name="name" /> 
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label><br/>
                    <input type="text" className="form-control" value={this.state.email} name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="besked">Message</label><br />
                    <textarea aria-multiline className="form-control"  value={this.state.message} name="message"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Send" />
                </div>
            </form>
        );
    }
}

export default TemplateContactForm;