import { StyledCard, StyledCardWrapper } from "./styles";

export function Card(props){
    const {alarme, idAlarmeAtuado, dataEntrada, dataSaida} = props.alarme;

    const formatDate = date => {
        const splitDate = date.split("T")[0];
        const year = splitDate.split("-")[0];
        const month = splitDate.split("-")[1];
        const day = splitDate.split("-")[2];
        
        return (day + "/" + month + "/" + year);
    }

    return(
        <StyledCard>
            <StyledCard.Title>#{idAlarmeAtuado}</StyledCard.Title>

            <StyledCard.PropName>Descrição do alarme</StyledCard.PropName>
            <StyledCard.Prop>{alarme.descricao}</StyledCard.Prop>
        

            <StyledCard.PropName>Descrição do equipamento</StyledCard.PropName>
            <StyledCard.Prop>{alarme.equipamento.nomeEquipamento}</StyledCard.Prop>

            <StyledCard.PropName>Data de entrada</StyledCard.PropName>
            <StyledCard.Prop>{formatDate(dataEntrada)}</StyledCard.Prop>

            <StyledCard.PropName>Data de saída</StyledCard.PropName>
            <StyledCard.Prop>{formatDate(dataSaida)}</StyledCard.Prop>
        </StyledCard>
    )
}

export function CardWrapper(props)
{
    return(
        <StyledCardWrapper>
            {props.children}
        </StyledCardWrapper>
    )
}