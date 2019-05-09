// React dependencies
import React, { Component } from "react";
import { AsyncStorage, ScrollView } from "react-native";

import Section from "../Components/Styled-Components/Section";
import { H1 } from "../Components/Styled-Components/Headings";
import Image from "../Components/Styled-Components/Images";

import Button from "../Components/UI/Buttons";

export default class Welcome extends Component {
  generateToken = async () => {
    // Generates token to say the user has visited
    await AsyncStorage.setItem("hasVisited", "true");

    // Navigates to the MainStack
    this.props.navigation.navigate("MainStack");
  };

  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "white"
        }}
      >
        <Section justifyContent="center" alignItems="center" flexGrow={1}>
          <Section
            justifyContent="center"
            alignItems="center"
            flexGrow={0}
            marginBottom={40}
          >
            <H1>Shopping Assistant</H1>
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
  }
}
