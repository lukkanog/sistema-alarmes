import styled from "styled-components";

export const StyledCard = styled.div`
    background-color: #fff;
    padding: 1em;
    box-shadow: 5px 5px 10px #00000090;
    width: 280px;
    /* display: flex;
    flex-direction: column;
    justify-content: space-around; */
`;

StyledCard.Title = styled.h3`
    font-weight: bolder;
    font-size: 1.5em;
    color: #ED6A5A;
`;

StyledCard.PropName = styled.p`
    color: #777;
    font-size: .85rem;

`;

StyledCard.Prop = styled.p`
    margin-top: -.4rem;
    line-height: .5rem;
    font-size: 1.25rem;
`;

export const StyledCardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;