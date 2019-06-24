import React from 'react';


class AddTodo extends React.Component {

    state = { content: ''}

    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
       this.props.addTodo(this.state);
       this.setState({content: ''});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="todo" 
                        onChange={this.handleChange} value={this.state.content} placeholder="Add New To-Do:"/>
                </form>
            </div>
        );
    }
}

export default AddTodo;