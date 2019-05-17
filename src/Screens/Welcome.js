// React dependencies
import React, { Component } from "react";
import { AsyncStorage, ScrollView } from "react-native";

// Stateless components
import Section from "../Components/Styled-Components/Section";
import { H1 } from "../Components/Styled-Components/Headings";
import Image from "../Components/Styled-Components/Images";
import Button from "../Components/UI/Buttons";

// Higr-Order-Components (HOC)
import { withTheme } from "styled-components";

/*
Context API Consumer:
- Wraps the entire component, Consumer then renders the children (This components JSX)
- When using the <Consumer> component you can access the value which has access to the entire state and the dispatch method

Usage:

<Consumer>
{value => {
  <Text colour={value.isDark : "White" : "Black"}> Hello </Text>
}}
</Consumer>
*/
import { Consumer } from "../Context";

class Welcome extends Component {
  generateToken = async () => {
    await AsyncStorage.setItem("hasVisited", "true");
    this.props.navigation.navigate("MainStack");
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: value.isDark
                  ? this.props.theme.Primary
                  : this.props.theme.Secondary
              }}
            >
              <Section
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                isDark={value.isDark}
              >
                <Section
                  justifyContent="center"
                  alignItems="center"
                  flexGrow={0}
                  marginBottom={40}
                  isDark={value.isDark}
                >
                  <H1
                    colour={
                      value.isDark
                        ? this.props.theme.Secondary
                        : this.props.theme.Primary
                    }
                  >
                    Shopping Assistant
                  </H1>
                </Section>

                <Image
                  source={require("../Assets/App-Icon.png")}
                  resizeMode="contain"
                  width={200}
                  height={200}
                  radius={100}
                />

                <Section
                  justifyContent="center"
                  alignItems="center"
                  flexGrow={0}
                  marginTop={40}
                  marginBottom={10}
                  isDark={value.isDark}
                >
                  <Button
                    isCompact={true}
                    mode="contained"
                    text="Start Shopping"
                    colour="#3498DB"
                    style={{
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20,
                      borderRadius: 5,
                      color: "white"
                    }}
                    label="Start shopping"
                    onClick={this.generateToken}
                    isDark={true}
                    isDisabled={false}
                  />
                </Section>
              </Section>
            </ScrollView>
          );
        }}
      </Consumer>
    );
  }
}

export default withTheme(Welcome);
