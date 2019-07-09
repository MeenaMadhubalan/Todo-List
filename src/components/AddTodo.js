import React, { Component } from 'react'

export class AddTodo extends Component {
state={
    title:''
}

onChange = (e) =>{
this.setState(
    {[e.target.name] : e.target.value}
);
}

onSubmit =(e) =>{
    e.preventDefault();
      this.props.addTodo(this.state.title);
    this.setState({title:''})
}
    render() {
        return (
        <form onSubmit={this.onSubmit} style={{display:'flex'}}>
            <input type="text" name="title" value={this.state.title} onChange={this.onChange} placeholder="Add your todo here..." style={{
                flex:'10',
                padding:'2px',
                outline:'none',
                borderBottom: '5px dotted gray '}}/>
            <input type="submit" value="Add" style={{
                color: 'yellow',
                float: 'right',
                border: '1px solid yellow',
                flex:'1',   
                cursor: 'pointer',
                backgroundColor:'gray',
                outline :'none'}}/>
        </form>
        )
    }
}

export default AddTodo
