var React = require('react');

class Note extends React.Component {
    constructor(props) {
        super(props);
    };
    render(){
        return (
            <li>
                {this.props.item.header}
                <button onClick={()=> this.props.onDelete(this.props.item)}> Remove </button>
            </li>
            );
    }
}
module.exports = Note;