var React = require('react');
var ReactDOM = require('react-dom');
var Welcome = require('./components/Welcome.js');

class App extends React.Component {
    constructor(props) {
        super(props);
    };
    render(){
        return (
            <div> Oh!<Welcome name="Vasya"/></div>
            );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));