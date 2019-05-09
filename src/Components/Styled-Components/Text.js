/* 
Text:
- Import the styled variable from styled-components/native

- Provide the neccessaary props, if none are provided the default props will be used


Usage:
- To use the component first import it into the screen its being used on, then use it like the example below:

<Text size="40px" colour="red" align="right"> Hello </Text>
*/

import styled from "styled-components/native";
import proptypes from "proptypes";

const Text = styled.Text`
  font-size: ${props => props.size};
  color: ${props => props.colour};
  text-align: ${props => props.align};
`;

Text.defaultProps = {
  size: "25px",
  colour: "black",
  align: "left"
};

Text.proptypes = {
  size: proptypes.number.isRequired,
  colour: proptypes.string.isRequired,
  align: proptypes.string.isRequired
};

export default Text;
