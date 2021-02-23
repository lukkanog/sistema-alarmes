import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 2em 0;
    display: flex;
    align-items: center;
    justify-content : center;
`;

Wrapper.Container = styled.div`
    max-width: 1200px;
    width: 80%;

    @media (max-width: 1000px)
    {
        width: 90%;
    }

    @media (max-width: 800px)
    {
        width: 95%;
    }
`;