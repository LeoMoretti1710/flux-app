// import logo from './logo.svg';
import './App.css';
// fazendo os imports necessários
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions/actions';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component{
  // criando o método render
  render() {
    const {dispatch, visibleTodos} = this.props;
    return(
      <div className="App">
        <header className="App-header">
          <div>
            <AddTodo onAddClick={text => dispatch(addTodo(text))} />
            <TodoList todos = {visibleTodos} />
          </div>
        </header>
      </div>
    )
  }
}


//Criando a função para selecionar o estado atual da store criada anteriormente

function select(state) {
  return{
    visibleTodos: state.todos
  }
}

export default connect (select)(App);



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
