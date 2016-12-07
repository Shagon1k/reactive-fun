var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List.js');
var Controls = require('./components/Controls.js');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.val = '';
    };

    addItem() {
        this.val = this.state.value;
        document.getElementById('newItem').value = '';
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    render(){
        return (
            <div> Oh!
                <List/>
                <Controls handleChange={this.handleChange.bind(this)} addItem={this.addItem.bind(this)}  />
            </div>
            );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));