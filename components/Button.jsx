const { default: styled } = require("styled-components");

export const Button = styled.button`
  background-color: ${(props) =>
    props.black ? "black" : 
    props.grey ? "#E9E9E9" : 
    props.brown ? "#492B00" : "initial"};
  color: ${(props) =>
    props.black ? "white" : 
    props.grey ? "black" : 
    props.brown ? "white" : "initial"};
`;