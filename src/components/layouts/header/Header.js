import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="./../../../../public/logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' React Form'}
                    </Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default Header;