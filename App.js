// React dependencies
import React, { Component } from "react";

// The exported app container which will decide which route or routes are viewed
import AppContainer from "./src/Routing/Index";

/* 
Styled-Components provider:
- ThemeProvider is a provider for styled-components
- Ths allows styled-components theme styles to be injected into the application
- For more information about the themeprovider visit https://www.styled-components.com/docs/api#themeprovider
*/
import { ThemeProvider } from "styled-components/native";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{}}>
        <AppContainer />
      </ThemeProvider>
    );
  }
}
