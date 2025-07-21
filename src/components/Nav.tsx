import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  margin-top: 30px;
  text-align: center;

  a {
    text-decoration: none;
    font-family: 'Space Mono', monospace;
    font-size: 14px;
    font-weight: bold;
    color: #95d2e6;
    margin: 0 10px;
    border-bottom: 2px solid #cce5eb;
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/employment">Employment</Link>
      <Link to="/education">Education</Link>
      <Link to="/extracurriculars">Extracurriculars</Link>
      <Link to="/more">More</Link>
      <Link to="/index">Index</Link>
    </StyledNav>
  );
}
