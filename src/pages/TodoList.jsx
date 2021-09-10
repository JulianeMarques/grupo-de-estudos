import React, { Component } from 'react'

class TodoList extends Component {
    

    render() {
        const { email } = this.props;

        return (
            <div>
                <header>
                  <h1>Todo List</h1>
                  <span>{ email }</span>
                </header>
                
            </div>
        )
    }
}


export default TodoList;
