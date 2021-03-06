import styled from "styled-components";

export const StyledCard = styled.div`
    background-color: #fff;
    padding: 1em;
    box-shadow: 5px 5px 10px  #00000090;
    width: 280px;
    transition: .4s;
    margin: 1em 0%;


    &:hover{
        box-shadow: 5px 5px 10px #ED6A5A90;
    }

`;

StyledCard.Title = styled.h3`
    font-weight: bolder;
    font-size: 1.5em;
    color: #ED6A5A;
`;

StyledCard.PropName = styled.p`
    color: #999;
    font-size: .85rem;

`;

StyledCard.Prop = styled.p`
    margin-top: -.4rem;
    line-height: .4rem;
    font-size: 1.25rem;
`;

StyledCard.FlexGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

StyledCard.Alert = styled.p`
    padding: .25rem;
    background-color: #ED6A5A;
    left: 0;
    font-weight: bold;
    color: white;
    position: relative;
    left: -1em;
    padding-left: 1em;
`;


export const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;