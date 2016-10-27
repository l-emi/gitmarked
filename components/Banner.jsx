import React from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';

const Banner = React.createClass ({
    render() {
        return (
            <div id="banner-style">
                <p id="banner-text">G I T M A R K E D</p>
                <p id="sub-text">a Github &nbsp;<FontAwesome name="cutlery" id="flavor" />&nbsp; markdown previewer</p>
            </div>
        );
    }
});

export default Banner;