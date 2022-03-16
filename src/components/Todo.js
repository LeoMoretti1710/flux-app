import React, {Component} from 'react';

//Criar o componente de classe
class Todo extends Component{
    render() {
        return(
            <li>
                {this.props.text}
            </li>
        )
    }
}

export default Todo