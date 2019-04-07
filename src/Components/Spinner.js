/* 
Spinner:
- Import React and the React-Native activity indicator
- Import the container and section styled-components
- It's a functionless component and only returns a spinner
- The spinner is centered within the screen, when an action such as deciding which stack the user should go to it will be shown

Usage:
- To use the component iimport it to the screen which it needs to be used on

- Once import you can use the component like this example: 
  <Spinner />

- If you need to change the appearence of this component change the size or color props provided by the ActivityIndicator
*/
import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

import Container from "../Components/Container";
import Section from "../Components/Section";

export default () => {
  return (
    <Container center>
      <Section center>
        <ActivityIndicator size="large" color="#0000ff" />
      </Section>
    </Container>
  );
};
