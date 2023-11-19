import styled from 'styled-components';

export const MainContainer = styled.div`
    display: grid;
    /* place-items: center; */
    gap: 2em;
    grid-template-rows: 400px auto ;
  
    background-color: #282c34;
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    transition: all 1s ease-in-out;


    @media screen and (min-width: 768px) {
       width: 768px;
    }

    @media screen and (min-width: 1280px) {
        min-width: 100%;
       
    }

    /* &>.wrapper {
        align-self: start;
        display: grid;
        gap: 1em;
    } */
`;