import styled from "styled-components";

export const Select = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif") no-repeat #eeeeee;
    background-position: 218px center;
    width: 250px;
    height:30px;
    border:1px solid #ddd;
    margin: 1rem;
    margin-left: 0;
    padding-left: .25rem;

    &:hover{
        cursor: pointer;
    }
`;