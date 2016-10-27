import React from 'react';
import ReactDOM from 'react-dom';

const ContainerHeader = React.createClass ({
    render() {
        return (
            <div id="container-text">
                <p>&nbsp;&nbsp;{this.props.text}&nbsp;&nbsp;</p>
            </div>
        );
    }
});

export default ContainerHeader;