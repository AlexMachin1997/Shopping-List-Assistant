// React dependencies
import React, { Component } from "react";

// Creating the context for the app
const Context = React.createContext();

/* 
reducer:
- Defines the actions avaliable
- Copies the existing state
- Modifies the isDark property
- To access the reducer defined use the dispatch property
*/
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        isDark: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    isDark: false,
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// This is what gets imported into a component to allow the provider to be accessed
// Similar process to connect() in react-redux https://react-redux.js.org/api/connect
export const Consumer = Context.Consumer;
