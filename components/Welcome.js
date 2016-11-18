var React = require('react');

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    };
    render(){
        return (
            <span> Hello, {this.props.name}</span>
            );
    }
}
module.exports = Welcome;