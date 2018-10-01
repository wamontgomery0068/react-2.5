import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList.js'

class App extends Component {
  constructor () {
    super ();

    this.state = {
      list: [],
      input: ""
    };

    this.handleAddTask = this.handleAddTask.bind( this );

  }

  handleInputChange ( value ) {
    this.setState( { input:value } );
  }

  handleAddTask () {
    this.setState( { 
      list: [this.state.list, this.state.input],
      input: ""
    });
  }

  render() {
    let list = this.state.list.map(( element,index ) => {
      return (
        <ToDoList key={ index } task={ element } />
      )
    })

    return (
      <div className="App">
        <h1> Andrew's to-do list:</h1>

        <div>
          <input value={this.state.input}
                 placeholder="Task you shall enter"
                 onChange={ (e) => this.handleInputChange(e.target.value)}
           />

           <button onClick={ this.handleAddTask }>Add Task</button>
        </div>

        <br />

        { list }
      </div>
    );
  }
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
