import React from "react";
import { StyledCard } from "./styles";
import formatDate from "../../utils/date";
import "react-toggle/style.css";


export function Equipamento(props) {
    const { idEquipamento, nomeEquipamento, tipo, dataCadastro, numeroSerie } = props.equipamento;


    return (
        <StyledCard>
            <StyledCard.Title>EQUIPAMENTO #{idEquipamento}</StyledCard.Title>

            <StyledCard.PropName>Nome do equipamento</StyledCard.PropName>
            <StyledCard.Prop>{nomeEquipamento}</StyledCard.Prop>


            <StyledCard.PropName>Nº de série</StyledCard.PropName>
            <StyledCard.Prop>{numeroSerie}</StyledCard.Prop>

            <StyledCard.PropName>Tipo   </StyledCard.PropName>
            <StyledCard.Prop>{tipo.nomeTipo}</StyledCard.Prop>

            <StyledCard.PropName>Cadastrado em</StyledCard.PropName>
            <StyledCard.Prop>{formatDate(dataCadastro)}</StyledCard.Prop>


        </StyledCard>
    )
}