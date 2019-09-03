import React, { Component } from 'react';
import { Form, Card, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './regform.css';

class Registration_Form extends Component {

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
            pin: ''
        }

        this.validateInput = this.validateInput.bind(this);
    };

    validateInput(e) {
        e.preventDefault();
        // validate pincode 
        if (this.state.pin !== "") {
            var valid = this.state.pin.match(/^[1-9][0-9]{5}$/);
            if (this.state.pin.length !== 6 || valid) {
                toast.error("Enter valid PinCode", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate phone 
        if (this.state.phone !== "") {
            if (this.state.phone.length !== 10) {
                toast.error("Enter valid Contact Number", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate mail id
        if (this.state.email !== "") {
            var emailValid = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            if (!emailValid) {
                toast.error("Enter valid Email ID", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate fname
        if (this.state.fname !== "") {
            var fnameValid = this.state.fname.match(/^[A-Za-z ]+$/);
            if (!fnameValid) {
                toast.error("Enter valid Name, accepts only alphabets", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate fname
        if (this.state.lname !== "") {
            var lnameValid = this.state.lname.match(/^[A-Za-z ]+$/);
            if (!lnameValid) {
                toast.error("Enter valid Name, accepts only alphabets", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate address1
        if (this.state.address1 !== "") {
            var address1Valid = this.state.address1.match(/[\w',-\\/.\s]/);
            if (!address1Valid) {
                toast.error("Enter valid Address", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate address2
        if (this.state.address2 !== "") {
            var address2Valid = this.state.address2.match(/[\w',-\\/\s]/);
            if (!address2Valid) {
                toast.error("Enter valid Address", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate city
        if (this.state.city !== "") {
            var cityValid = this.state.city.match(/[\w',-\\/\s]/);
            if (!cityValid) {
                toast.error("Enter valid Address", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
        // validate state
        if (this.state.sstate !== "") {
            var sstateValid = this.state.s.match(/[\w',-\\/\s]/);
            if (!sstateValid) {
                toast.error("Enter valid Address", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
        }
    }
    render() {
        return (
            <Card className="card-size">
                <Card.Body>
                    <Form onSubmit={this.props.handleFormSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="John" name="fname" onChange={this.props.handleInputChange} value={this.props.newFName} onBlur={this.validateInput} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Wick" name="lname" onChange={this.props.handleInputChange} value={this.props.newLName} onBlur={this.validateInput} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.props.handleInputChange} value={this.props.newEmail} onBlur={this.validateInput} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="number" placeholder="+91 9123456789" name="phone" onChange={this.props.handleInputChange} value={this.props.newPhone} onBlur={this.validateInput} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" name="address1" onChange={this.props.handleInputChange} value={this.props.newAddr1} onBlur={this.validateInput} />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" name="address2" onChange={this.props.handleInputChange} value={this.props.newAddr2} onBlur={this.validateInput} />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" name="city" onChange={this.props.handleInputChange} value={this.props.newCity} onBlur={this.validateInput} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" name="sstate" onChange={this.props.handleInputChange} value={this.props.newSState} onBlur={this.validateInput} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control type="number" name="pin" onChange={this.props.handleInputChange} value={this.props.newPin} onBlur={this.validateInput} />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Submit
                </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }

}


// class Form extends React.Component {



//     constructor(props) {
//         super(props);
//         this.state = {
//             info: {
//                 fname: '',
//                 lname: '',
//                 phone: '',
//                 email: '',
//                 address1: '',
//                 address2: '',
//                 city: '',
//                 state: '',
//                 pin: ''
//             },
//             data: [],
//             submitted: false,
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleInputText = this.handleInputText.bind(this);
//     }
//     handleInputText(e) {
//         e.preventDefault();
//         var type = e.target.name;
//         var value = e.target.value;
//         this.setState({
//             ...this.state, info: Object.assign({}, this.state.info, { [type]: value })
//         })
//         // console.log("this.state", this.state)
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         if (this.state.info.fname === "" || this.state.info.lname === "" || this.state.info.phone === "" || this.state.info.email === "" || this.state.info.address1 === "" || this.state.info.address2 === "" || this.state.info.city === "" || this.state.info.state === "" || this.state.info.pin === "") {
//             return;
//         }
//         else {
//             var newArr = this.state.data;
//             var newObj = {};
//             newObj = this.state.info;
//             newArr.push(newObj);
//             this.setState({
//                 ...this.state.data, data: newArr
//             })

//             // To clear the data in the fields after updating
//             var emptyObj = {
//                 fname: '',
//                 lname: '',
//                 phone: '',
//                 email: '',
//                 address1: '',
//                 address2: '',
//                 city: '',
//                 state: '',
//                 pin: ''
//             }
//             this.setState({
//                 ...this.state.info, info: emptyObj
//             })
//             return;
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Card className="card-size">
//                     <Card.Body>
//                         <Form>
//                             <Form.Row>
//                                 <Form.Group as={Col} controlId="formGridFName">
//                                     <Form.Label>First Name</Form.Label>
//                                     <Form.Control type="text" placeholder="John" name="fname" onChange={this.handleInputText} value={this.state.info.fname === "" ? "" : this.state.info.fname} />
//                                 </Form.Group>

//                                 <Form.Group as={Col} controlId="formGridLName">
//                                     <Form.Label>Last Name</Form.Label>
//                                     <Form.Control type="text" placeholder="Wick" name="lname" onChange={this.handleInputText} value={this.state.info.lname === "" ? "" : this.state.info.lname} />
//                                 </Form.Group>
//                             </Form.Row>
//                             <Form.Row>
//                                 <Form.Group as={Col} controlId="formGridEmail">
//                                     <Form.Label>Email</Form.Label>
//                                     <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleInputText} value={this.state.info.email === "" ? "" : this.state.info.email} />
//                                 </Form.Group>
//                             </Form.Row>

//                             <Form.Group controlId="formGridAddress1">
//                                 <Form.Label>Address</Form.Label>
//                                 <Form.Control placeholder="1234 Main St" name="address1" onChange={this.handleInputText} value={this.state.info.address1 === "" ? "" : this.state.info.address1} />
//                             </Form.Group>

//                             <Form.Group controlId="formGridAddress2">
//                                 <Form.Label>Address 2</Form.Label>
//                                 <Form.Control placeholder="Apartment, studio, or floor" name="address2" onChange={this.handleInputText} value={this.state.info.address2 === "" ? "" : this.state.info.address2} />
//                             </Form.Group>

//                             <Form.Row>
//                                 <Form.Group as={Col} controlId="formGridCity">
//                                     <Form.Label>City</Form.Label>
//                                     <Form.Control type="text" name="city" onChange={this.handleInputText} value={this.state.info.city === "" ? "" : this.state.info.city} />
//                                 </Form.Group>

//                                 <Form.Group as={Col} controlId="formGridState">
//                                     <Form.Label>State</Form.Label>
//                                     <Form.Control type="text" name="state" onChange={this.handleInputText} value={this.state.info.sstate === "" ? "" : this.state.info.sstate} />
//                                 </Form.Group>

//                                 <Form.Group as={Col} controlId="formGridZip">
//                                     <Form.Label>Pincode</Form.Label>
//                                     <Form.Control type="number" name="pin" onChange={this.handleInputText} value={this.state.info.pin === "" ? "" : this.state.info.pin} />
//                                 </Form.Group>
//                             </Form.Row>

//                             <Button variant="primary" type="submit" onClick={this.handleSubmit}>
//                                 Submit
//                         </Button>
//                         </Form>
//                     </Card.Body>
//                 </Card>
//                 {this.state.data.length > 0 &&
//                     <Table dataFromParent={this.state.data} />
//                 }
//             </div>
//         );
//     }
// }

export default Registration_Form;