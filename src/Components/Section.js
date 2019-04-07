/* 
Section:
- Import the styled variable from styled-components/native

- A generic section to postion children elements using flex-box

- To postion elements the justify-content flex property is used. To postion elements directly in the center the container and section need to be centered with the center prop

Usage:
- To use the component first import it into the screen its being used on, then use it like the example below

<Section center>
  Children elements go here
</Section>

*/

import styled from "styled-components/native";

export default styled.View`
  align-items: ${props => {
    if (props.strech) return "strech";

    if (props.flexStart) return "flex-start";

    if (props.flexEnd) return "flex-end";

    if (props.center) return "center";

    if (props.spaceBetween) return "space-between";

    if (props.baseline) return "baseline";
    else return "flex-start";
  }};

  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
  margin-right: ${props => (props.marginRight ? props.marginRight : 0)};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`;
