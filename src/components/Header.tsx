import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: white;
  padding: 0;
  text-align: center;
  font-family: 'Space Mono', monospace;
  border-bottom: none;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: black;
  }

  p {
    font-size: 16px;
    margin: 0;
    color: black;
  }
`;
export default function Header() {
  return (
    <StyledHeader>
      <h1>Jess Christine So</h1> <br />
      <p>Welcome to my page! I'm happy you're here :)</p>
    </StyledHeader>
  );
}
