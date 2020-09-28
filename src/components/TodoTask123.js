import React, {Component} from 'react';
import uuid from 'uuid';

class TodoTask extends Component{
    state = {
        tasks:[
            {id: uuid(), content: "Milk"},
            {id: uuid(), content: "Egg"},
            {id: uuid(), content: "Shoes"},
            {id: uuid(), content: "Pen"},
            {id: uuid(), content: "Chicken"}
        ]
    }
    render(){
        return(
            <div className="todotask-container">
                
            </div>
        );
    }
}

export default TodoTask;