import React, { Component } from 'react';

//Criando o componente de classe e a estrutura para o elemento de referência
class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    //criando o manipulador do evento

    inserirItem(e) {
        if (this.input.current.value !== '') {
            e.preventDefault();
            var value = this.input.current.value
            var text = value.trim()
            this.props.onAddClick(text)
        }
        this.input.current.value = '';
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.input} />
                <button className="btn-insert" onClick={(e) => this.inserirItem(e)}>Incluir Item</button>
            </div>
        )
    }
}

export default AddTodo;