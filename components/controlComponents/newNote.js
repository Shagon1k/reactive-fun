var React = require('react');

class NewNote extends React.Component {
    constructor(props) {
        super(props);
    }

    clearValueInput () {

    }

    render(){
        return (
            <div>
                <input id="newItem" type="text" onChange={this.props.handleChange} />
                <button onClick={this.props.addItem}>Add New Note</button>
            </div>
            );
    }
}
module.exports = NewNote;