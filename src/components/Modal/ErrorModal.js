import styled from "styled-components";

export const ErrorModal = styled.div`
    padding: 1rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

ErrorModal.Title = styled.h2`
    color: #910000;
    font-size: 1.5rem;
    font-weight: bolder;
`;

ErrorModal.Text = styled.p`
    font-size: 1rem;
`;

export default ErrorModal;