import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer className="app-footer">
                <div className="ml-auto-left">
                    <a href="#">My Form</a>
                    <span>&copy; 2018 JSFactory.</span>
                </div>
                <div className="ml-auto-right">
                    <span>Powered by</span>
                    <a href="#">JSFactory</a>
                </div>
            </footer>
        );
    }
}

export default Footer;