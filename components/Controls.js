var React = require('react');
var NewNote = require('./controlComponents/newNote.js')

class Controls extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <NewNote handleChange={this.props.handleChange} addItem={this.props.addItem} />
            </div>
            );
    }
}
module.exports = Controls;