// React dependencies
import React, { Component } from "react";
import { SafeAreaView, View, ScrollView } from "react-native";

// Component assets
import ApplicationIcon from "../../Assets/App-Icon.png";

// Higer-order-components
import { withTheme } from "styled-components";

// Stateless components
import Text from "../Styled-Components/Text";
import Link from "./Links";
import Image from "../Styled-Components/Images";
import Section from "../Styled-Components/Section";

class Drawer extends Component {
  state = {
    logoutModal: false,
    success: "",
    isDark: false
  };

  render() {
    const { navigate } = this.props.navigation;
    const { theme } = this.props;

    return (
      <ScrollView
        contentContainerStyle={{
          backgroundColor: this.state.isDark ? theme.Primary : theme.Secondary,
          flex: 1
        }}
      >
        <Section
          paddingTop={50}
          paddingBottom={50}
          justifyContent="center"
          alignItems="center"
          backgroundColor={this.state.isDark ? theme.Primary : theme.Secondary}
          // isDark is not needed as the d
        >
          <Image source={ApplicationIcon} height={120} width={120} />
        </Section>

        <Section
          paddingBottom={40}
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          flexGrow={0}
          isDark={this.state.isDark}
        >
          <Link
            action={() => navigate("Tabs")}
            icon="format-list-bulleted"
            text="Shopping lists"
            isDark={this.state.isDark}
          />
        </Section>

        <Section
          paddingBottom={40}
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          flexGrow={0}
          isDark={this.state.isDark}
        >
          <Link
            action={() => navigate("Settings")}
            icon="settings"
            text="Settings"
            isDark={this.state.isDark}
          />
        </Section>

        <Section
          paddingBottom={40}
          justifyContent="flex-start"
          alignItems="flex-start"
          flexWrap="wrap"
          flexGrow={0}
          isDark={this.state.isDark}
        >
          <Link
            action={() => navigate("WelcomeStack")}
            icon="exit-to-app"
            text="Exit"
            isDark={this.state.isDark}
          />
        </Section>
      </ScrollView>
    );
  }
}

export default withTheme(Drawer);
