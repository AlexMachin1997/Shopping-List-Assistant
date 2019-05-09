// React dependencies
import React, { Component } from "react";
import { ScrollView, AsyncStorage } from "react-native";

// Screen Icon
import EmptyIcon from "../Assets/Shocked.png";

// Higher-order-components
import { withTheme } from "styled-components";
import { NavigationEvents } from "react-navigation";

// Functionless components
import Empty from "../Components/UI/States/Empty";
import ActionButton from "../Components/UI/Action-Blocks/ActionButton";
import CreateShoppingListModal from "../Components/UI/Modal";
import ShoppingListCard from "../Components/UI/Cards/ShoppingLists/ShoppingList";
import Loading from "../Components/UI/States/Loading";
import { TextInput } from "react-native-paper";

// Utility libraries
import shortid from "shortid";
import moment from "moment";

class ShoppingLists extends Component {
  state = {
    IsCreateShoppingModalVisible: false,
    isLoading: true,
    shoppingListName: "",
    shoppingLists: [],
    shoppingListTheme: "",
    isDark: false
  };

  componentDidMount() {
    console.log("The shopping list screen has mounted");
    this.fetchShoppingLists();
  }

  fetchShoppingLists = async () => {
    await this.setState(({ isLoading }) => ({
      isLoading: isLoading
    }));

    // Perform an AsyncStroage request based on the key provided
    const value = await AsyncStorage.getItem("ShoppingLists");

    if (value) {
      await this.setState({
        shoppingLists: JSON.parse(value),
        isLoading: false
      });
    } else {
      await this.setState({
        shoppingLists: [],
        isLoading: false
      });
    }
    console.log(this.state.shoppingLists);
  };

  /* 
	handleChange:
	- Generic state handler
	- Only works for single state props like ShoppingListName for example
	*/
  handleChange = async (id, value) => {
    await this.setState({
      [id]: value
    });
  };

  createShoppingList = async () => {
    /*
    Callback approach:
    - Instead of initalising a seperately variable and then pushing the variable is intalized in the callback
    - Await for the data to be set (IMPORTANT)
    - Without waiting the state wouldn't update in time.
    - Add the new shopping list to the beginning of the array
    - This sets the isLoading to true whilst the shopping list is being created
    */
    await this.setState(({ isLoading }) => ({
      isLoading: !isLoading
    }));

    /* 
    shoppingListThemes:
    - The material colours defined above are added to the array to form an array of strings
    - They are originally seperate variables as remebering all the colours became a task
    - The array is used below, it selects a random number * the length of this array e.g #2196f3
    */
    // Material colours
    const red = "#e53935"; // Red with a shade of 500
    const green = "#43a047"; // Green with a shade of 500
    const blue = "#2196f3"; // Blue with a shade of 500
    const purple = "#9c27b0"; // Purple with a shade of 500

    const shoppingListThemes = [red, blue, green, purple];
    let randomTheme =
      shoppingListThemes[Math.floor(Math.random() * shoppingListThemes.length)];

    try {
      let shoppingListData = {
        id: shortid.generate(),
        name: this.state.shoppingListName,
        createdOn: moment().format("Do MMMM YYYY"),
        shoppingListTheme: randomTheme,
        items: []
      };

      // Adding the new data to the front of the array
      await this.setState(({ shoppingLists }) => ({
        shoppingLists: [...shoppingLists, shoppingListData]
      }));

      // Update shopping lists array
      await AsyncStorage.setItem(
        "ShoppingLists",
        JSON.stringify(this.state.shoppingLists)
      );

      // Update the states with the values specified
      await this.setState({
        IsCreateShoppingModalVisible: false,
        shoppingListName: "",
        isShoppingListNameFocussed: false,
        isLoading: false
      });

      console.log(this.state.shoppingLists);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    if (this.state.isLoading) {
      return <Loading isDark={this.state.isDark} />;
    }

    return (
      <>
        {/* On refocus refetch the shopping lists*/}
        <NavigationEvents onDidFocus={() => this.fetchShoppingLists()} />

        <CreateShoppingListModal
          isDark={this.state.isDark}
          visible={this.state.IsCreateShoppingModalVisible}
          title="Create a shopping list"
          onDismiss={() =>
            this.setState({
              IsCreateShoppingModalVisible: !this.state
                .IsCreateShoppingModalVisible
            })
          }
          onCancel={() =>
            this.setState({
              IsCreateShoppingModalVisible: !this.state
                .IsCreateShoppingModalVisible,
              shoppingListName: ""
            })
          }
          onOk={this.createShoppingList}
          submitDisabled={this.state.shoppingListName < 1 ? true : false}
        >
          <TextInput
            placeholder="Enter a shopping list name"
            value={this.state.text}
            onChangeText={value => this.handleChange("shoppingListName", value)}
            underlineColor="transparent"
            mode="flat"
          />
        </CreateShoppingListModal>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: this.state.isDark
              ? this.props.theme.Primary
              : this.props.theme.Secondary
          }}
        >
          {this.state.shoppingLists.length < 1 ? (
            <Empty
              image={EmptyIcon}
              label="No shipping lists exist"
              heading="No shopping lists exist"
              overview="Why not try adding one ?"
              isDark={this.state.isDark}
            />
          ) : (
            this.state.shoppingLists.map((data, index) => {
              return (
                <ShoppingListCard
                  key={index}
                  title={data.name}
                  background={data.shoppingListTheme}
                  action={() =>
                    this.props.navigation.navigate("ShoppingList", {
                      ShoppingList: data,
                      title: data.name
                    })
                  }
                />
              );
            })
          )}
        </ScrollView>

        <ActionButton
          colour="white"
          icon={this.state.IsCreateShoppingModalVisible ? "remove" : "add"}
          action={() =>
            this.setState({
              IsCreateShoppingModalVisible: true
            })
          }
        />
      </>
    );
  }
}

export default withTheme(ShoppingLists);
