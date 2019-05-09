import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import Spinner from "../Components/UI/States/Loading";

export default class IndexScreen extends Component {
  state = {
    isDark: false
  };

  componentDidMount() {
    this.StatusCheck();
  }

  /* 
  StatusCheck:
  - Looks for a key named hasVisited
  - If the key exists go mainStack else WelcomeStack (Home screen and maybe a tutorial)
  - Whilst the action is being performed show the spinner component
  */
  StatusCheck = async () => {
    const token = await AsyncStorage.getItem("hasVisited"); // Find the key named userToken
    this.props.navigation.navigate(token ? "MainStack" : "WelcomeStack"); // Terniary operator to decide the stack the user goes to
  };

  render() {
    return <Spinner isDark={this.state.isDark} />;
  }
}
