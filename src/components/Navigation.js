import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationContainer = Styled.ul`
display: flex;
flex-direction: column;
margin: 1rem;
font-size: 1.6rem;
color: #f2f2f2;
font-weight: 400;
list-style: none;
padding: 0;
`;

const NavigationListItem = Styled.li`
padding: 1rem;
height: 1.6rem;
color: #f2f2f2;
cursor: pointer;
&:hover {
    background-color: #D0CBF8 ;
}
`;

const StyledLink = Styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationListItem>
        {" "}
        <i style={{ marginRight: "1rem" }} className="bi bi-house-fill"></i>
        <StyledLink to="/">Dashboard</StyledLink>
      </NavigationListItem>
      <NavigationListItem>
        <i style={{ marginRight: "1rem" }} className="bi bi-person-fill"></i>
        <StyledLink to="/profile">User Profile</StyledLink>
      </NavigationListItem>
    </NavigationContainer>
  );
};

export default Navigation;
