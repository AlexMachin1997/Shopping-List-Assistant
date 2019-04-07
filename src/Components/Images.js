import styled from "styled-components/native";

export default (Image = styled.Image`
  width: ${props => (props.width ? props.width : 10)};
  height: ${props => (props.height ? props.height : 10)};
  border-radius: ${props => (props.radius ? props.radius : 0)};
`);
