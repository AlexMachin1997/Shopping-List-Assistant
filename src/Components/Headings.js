/* 
Headings:
- Import the styled variable from styled-components/native

- All the heading sizes were gathered from https://www.w3schools.com/tags/tag_hn.asp

- The unti showed by W3C isn't supported, so they have been converted to pixels (Yucks!!!!!!!!!) 

Usage:
- To use the component iimport it to the screen which it needs to be used on

- Once you have imported the component use it like this example: 
    <H1>Hello Im a H1</H1>

- If you need to change the heading sizes change them here and it will be reflected throughout the rest of the application
*/

import styled from "styled-components/native";

// Web standard sizes for h1
export const H1 = styled.Text`
font-size: 32px
color: ${props => (props.colour ? props.colour : "black")}
`;

// Web standard sizes for h2
export const H2 = styled.Text`
  font-size: 24px;
  color: ${props => (props.colour ? props.colour : "black")};
`;

// Web standard sizes for h3
export const H3 = styled.Text`
  font-size: 18.72px;
  color: ${props => (props.colour ? props.colour : "black")};
`;

// Web standard sizes for  h4
export const H4 = styled.Text`
  font-size: 16px;
  color: ${props => (props.colour ? props.colour : "black")};
`;

// Web standard sizes for h5
export const H5 = styled.Text`
  font-size: 13.28px;
  color: ${props => (props.colour ? props.colour : "black")};
`;

// Web standard sizes for 56
export const H6 = styled.Text`
  font-size: 12px;
  color: ${props => (props.colour ? props.colour : "black")};
`;
