var React = require('react');
var Note = require('./Note.js');

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notesInfo: [{header : "Hello1"}, {header : "Hello2"}]
        }
    }

    onDelete(item) {
        this.setState({notesInfo: this.state.notesInfo.filter((i)=> i !== item)})
    }

    render(){
        return (
            <ul>
                {this.state.notesInfo.map((item)=> <Note key={item.header} item={item} addItem={this.props.addItem} onDelete={this.onDelete.bind(this)}/>)}
            </ul>
            );
    }
}
module.exports = List;