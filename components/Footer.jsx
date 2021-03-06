import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

const Footer = React.createClass({
    render() {
        return (
            <div id="footer-style">
                <a href="https://github.com/l-emi/gitmarked" target="_blank">
                <FontAwesome name="github" id="gitlink" />
                </a>
            </div>
        );
    }
});

export default Footer;