import styled from "styled-components";

export const EmptyStateWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 2rem;

`;

EmptyStateWrapper.Image = styled.img`
    width: 300px;
`;

EmptyStateWrapper.Text = styled.p`
    margin: 1rem 0;
    font-size: 1.25rem;
    color: #111;
`;