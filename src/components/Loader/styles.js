import styled from "styled-components";

export const LoaderWrapper = styled.div`
    width: 100%;
    background-color: #11111190;
    backdrop-filter: blur(10px);
    height: 120vh;
    position: absolute;
    left : 0;
    top: 5.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;

    @media(max-width: 600px){
        top: 7.5rem;
    }
`;

export const LoaderText = styled.p`
    color: #fafafa;
    text-align: center;
    padding-bottom: calc(20vh + 5.5rem);
`;


