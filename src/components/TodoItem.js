import React, { Component } from 'react'
import PropTypes from 'prop-types';
class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#ccc',
            padding: '1px',
            borderBottom: '5px solid yellow ',
            textDecoration: this.props.todo.completed ? 'line-through' :
                'none',


        }
    }
   


    render() {
        const { id, title } = this.props.todo;
        return (

            <div style = { this.getStyle() } >
            <p>
            <input type = "checkbox" onChange = {this.props.markComplete.bind(this, id) }/>{' '} { title } {' ' }
            
            <button onClick ={this.props.delTodo.bind(this,id) }
            style = { btnStyle } > x </button></p> 
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnStyle = {
    backgroundColor: 'yellow',
    color: 'black',
    float: 'right',
    border: 'none',
    padding: '1px 1px',
    cursor: 'pointer',
    borderRadius: '30%',
    outline :'none'
}

export default TodoItem