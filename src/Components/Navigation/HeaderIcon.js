// React dependencies
import React from "react";
import { View } from "react-native";
import proptypes from "proptypes";

// Component assets
import Icon from "react-native-vector-icons/MaterialIcons";

// Stateless components
import { TouchableRipple } from "react-native-paper";

const HeaderIcon = ({ marginRight, marginLeft, action, icon }) => {
  return (
    <View
      style={{
        marginRight: marginRight,
        marginLeft: marginLeft
      }}
    >
      <TouchableRipple onPress={action} rippleColor="#e91e63">
        <Icon name={icon} size={30} color="#CCDBDC" />
      </TouchableRipple>
    </View>
  );
};

/*
Proptype validation
- Validates the data runtime, any invalid props a warning will be shown
- https://reactjs.org/docs/typechecking-with-proptypes.html
*/
HeaderIcon.proptypes = {
  action: proptypes.func.isRequired,
  icon: proptypes.string.isRequired
};

/* 
defaultProps:
- Assigns default props to the componet, they only apply when a prop is not provided.
- https://reactjs.org/docs/react-without-es6.html#declaring-default-props
*/
HeaderIcon.defaultProps = {
  icon: "settings",
  marginLeft: 0,
  marginRight: 0
};

export default HeaderIcon;
