import React, { Component } from 'react';
import RegistrationForm from './../../widgets/reg_form/Registration_Form';
import RegistrationTable from './../../widgets/reg_table/Registration_Table';
import './main.css';

class Main extends Component {
    constructor() {
        super();

        this.state = {
            fname: '',
            lname: '',
            phone: '',
            email: '',
            address1: '',
            address2: '',
            city: '',
            sstate: '',
            pin: '',
            items: []
        }
    };

    handleFormSubmit = (e) => {
        e.preventDefault();

        const { fname, lname, phone, email, address1, address2, city, sstate, pin} = this.state;

        let items = [...this.state.items];

        items.push({
            fname: fname, lname: lname, phone: phone,
            email: email, address1: address1, address2: address2,
            city: city, sstate: sstate, pin: pin
        });

        this.setState({
            items,
            fname: '',
            lname: '',
            phone: '',
            email: '',
            address1: '',
            address2: '',
            city: '',
            sstate: '',
            pin: ''
        });
    };

    handleInputChange = (e) => {
        let input = e.target;
        let name = e.target.name;
        let value = input.value;

        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-2 col-xs-12">
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
                        <RegistrationForm handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} newFName={this.state.fname}
                            newLName={this.state.lname} newEmail={this.state.email} newPhone={this.state.phone} newAddr1={this.state.address1} newAddr2={this.state.address2}
                            newCity={this.state.city} newSState={this.state.sstate} newPin={this.state.pin} />
                        <RegistrationTable items={this.state.items} />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-2 col-xs-12">
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;