import { Link } from "react-router-dom";
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const baseInputStyles = css`
    border: 2px solid var(--grey);
    border-radius: 0.5rem/* 8px */;
    padding: 8px 16px;
    background-color: #cbd5e1;
    width: 100%;
    height: 38px;
    transition: all 0.4s ease;
    color: #222;
    font-weight: 600;
`
export const antInputStyles = css`
    border: 2px solid #777;
    /* border: 3px solid #4096ff; */
    background-color: #f5f5f5;
    color: #333;
    font-size: 14px;
    border-radius: 0.5rem;
    padding: 4px 16px;
    width: 100%;
    height: 32px;
    transition: all 0.2s;
`
export const dartInputStyles = css`
    border: 2px solid #777;
    height: 40px;
    width: 320px;
    padding: 2px 8px;
    background-color: #282c34;
    outline: none;
    border-radius: 8px;
    color: #ccc;
    
    font-size: 14px;
    transition: all 0.2s;
`




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
interface FieldProps {
    validated: boolean;

  }

export const Field = styled('input', {
    shouldForwardProp: (prop: string) =>
      isPropValid(prop) && !['validated'].includes(prop),
  })<FieldProps>`
    ${antInputStyles};
    ${({ validated }) => ({
      borderColor: validated  ? `#2196f3cc` : `#f5154dcd` ,
      outline: 'none' ,
    })}
  `;

  interface InputProps {
    errors?: boolean; // Define the 'errors' prop
    isDirty?: boolean; 
  }

  export const Input = styled('input', {
    shouldForwardProp: (prop: string) =>
      isPropValid(prop) && !['errors', 'isDirty'].includes(prop),
  })<InputProps>`
    ${dartInputStyles};
    ${({ errors , isDirty}) => ({
      borderColor: !isDirty  ? `#111` 
                : errors ?  "#800" : "#080",
      outline: 'none' ,
    })}
  `;

export const Inputa = styled.input<InputProps>`

    height: 40px;
    width: 320px;
    padding: 2px 8px;
    background-color: #282c34;
    border: 2px solid #222;
    outline: none;
    border-radius: 8px;
    color: #888;


    &:focus-visible {
        border-color: #ccc;
    }
    &:-internal-autofill-selected{
        background-color: #ff0 !important;
    }
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

export const StUserForm = styled.form`
    display: grid;
    place-items: center;
    grid-column-gap: 12px;
    grid-template-columns: 80px auto;

    padding: 22px;
    &> label{
        grid-column: span 2;

    }
`
