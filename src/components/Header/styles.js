import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content : center;
    padding: 2.5px 0;
    z-index: 2;
`;

export const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items : center;
`;

export const StyledList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    min-width: 20%;

    @media(max-width: 1000px){
        min-width: 50%;   
    }

`;

