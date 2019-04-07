// React dependencies
import React, { Component } from "react";

import { RaisedTextButton } from "react-native-material-buttons";

import Container from "../Components/Container";
import Section from "../Components/Section";
import { H1 } from "../Components/Headings";
import Image from "../Components/Images";

export default class Welcome extends Component {
  render() {
    return (
      <Container center>
        <Section center>
          <Section marginBottom="40px">
            <H1>Shopping Assistant</H1>
          </Section>

          <Section>
            <Image
              source={require("../Assets/App-Icon.png")}
              resizeMode="contain"
              width={200}
              height={200}
              radius={100}
            />
          </Section>

          <Section center marginTop="40px">
            <RaisedTextButton
              title="Start Shopping"
              color="#3498DB"
              titleColor="white"
              style={{
                paddingTop: 30,
                paddingBottom: 30,
                paddingLeft: 40,
                paddingRight: 40,
                borderRadius: 5
              }}
            />
          </Section>
        </Section>
      </Container>
    );
  }
}
