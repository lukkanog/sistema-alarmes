import styled from "styled-components";

export const SearchInput = styled.input.attrs({
    type : "text"
})`
    padding: .5rem .25rem;
    padding-left: 0;
    display: flex;
    width: 100%;
    border: none;
    border-bottom: 3px solid #111;
    margin: 1rem 0;
    transition: .5s;


    &:focus{
        outline: none;
        border-bottom: 3px solid #ED6A5A;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    padding: .5rem .25rem;
`;