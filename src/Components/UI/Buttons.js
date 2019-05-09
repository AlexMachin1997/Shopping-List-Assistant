//React dependencies
import React from "react";

// User-Interface Libaries
import { Button } from "react-native-paper";

import propTypes from "proptypes";

const Buttons = ({
  mode,
  isCompact,
  colour,
  style,
  onClick,
  label,
  isDisabled,
  isDark,
  text
}) => {
  return (
    <Button
      mode={mode}
      compact={isCompact}
      color={colour}
      contentStyle={style}
      onPress={onClick}
      accessibilityLabel={label}
      disabled={isDisabled}
      dark={isDark}
    >
      {text}
    </Button>
  );
};

Buttons.propTypes = {
  mode: propTypes.string.isRequired,
  isCompact: propTypes.bool.isRequired,
  colour: propTypes.string.isRequired,
  style: propTypes.object.isRequired,
  onClick: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  isDisabled: propTypes.bool.isRequired,
  isDark: propTypes.bool.isRequired,
  text: propTypes.string.isRequired
};

export default Buttons;