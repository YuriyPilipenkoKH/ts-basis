import { Link } from "react-router-dom";
import styled from "styled-components";


interface InputProps {
    errors?: boolean; // Define the 'errors' prop
    isValid?: boolean; // Define the 'isValid' prop if necessary
  }

export const NavBar = styled.nav`
    display: grid;
    gap: 25px;
    &>a {
        color: var(--accent-blue);
    }
`

export const HookedForm = styled.form`
    display: grid;
    gap: 30px;
`
export const Label = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--accent-blue);
`

export const Input = styled.input<InputProps>`

    height: 40px;
    width: 320px;
    padding: 2px 8px;
    background-color: #282c34;
    border: 2px solid #222;

    border-radius: 8px;
    color: #888;
    border-color: ${({ errors }) => 
    (errors ? "crimson" : "#222")};
    /* border-color: ${({ errors, isValid }) => 
    (errors ? "crimson" : isValid ? "#080" : "#222")}; */
`;
export const ErrorWrap = styled.div`
 
    color: #bd0228;
    position: absolute;
    bottom: -18px;
    font-size: 12px;
    font-weight: 500;
    z-index: 4;
`
export const ToMain = styled(Link)`
    position: absolute;
    top: 20px;
    left: 20px;
    color: var(--bisque);
    text-decoration: none;

    &:hover {
        color: var(--accent-blue);
    }
`
