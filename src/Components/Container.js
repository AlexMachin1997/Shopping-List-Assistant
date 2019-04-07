/* 
Container:
- Import the styled variable from styled-components/native

- A generic container to postion a wrapper using flex-box

- The componnet only accepts 1 prop, thats for the postion.

- To postion elements the justify-content flex property is used. To postion elements directly in the center the container and section need to be centered with the center prop

Usage:
- To use the component first import it into the screen its being used on, then use it like the example below

<Container center>
 Children elements go here
</Container>

*/

import styled from "styled-components/native";

export default styled.View`
  flex-grow: 1;

  justify-content: ${props => {
    if (props.strech) return "strech";

    if (props.flexStart) return "flex-start";

    if (props.flexEnd) return "flex-end";

    if (props.center) return "center";

    if (props.spaceBetween) return "space-between";

    if (props.spaceAround) return "space-around";

    if (props.spaceEvenly) return "space-evenly";
    else return "flex-start";
  }};
`;
