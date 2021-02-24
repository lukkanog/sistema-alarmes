import React, { useState } from "react";
import { StyledCard } from "./styles";
import Loader from "react-loader-spinner";
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import formatDate from "../../utils/date";





export function Alarme(props) {
    const { idAlarme, descricao, dataCadastro, equipamento, classificacao } = props.alarme;



    return (
        <StyledCard>
            <StyledCard.Title>ALARME #{idAlarme}</StyledCard.Title>

            <StyledCard.PropName>Descrição do alarme</StyledCard.PropName>
            <StyledCard.Prop>{descricao}</StyledCard.Prop>


            <StyledCard.PropName>Equipamento</StyledCard.PropName>
            <StyledCard.Prop>{equipamento.nomeEquipamento}</StyledCard.Prop>

            <StyledCard.PropName>Classificação</StyledCard.PropName>
            <StyledCard.Prop>{classificacao.nomeClassificacao}</StyledCard.Prop>

            <StyledCard.PropName>Cadastrado em</StyledCard.PropName>
            <StyledCard.Prop>{formatDate(dataCadastro)}</StyledCard.Prop>

        </StyledCard>
    )
}

