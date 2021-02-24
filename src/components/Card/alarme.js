import React from "react";
import { StyledCard } from "./styles";
import "react-toggle/style.css";
import formatDate from "../../utils/date";


export function Alarme(props) {
    const { idAlarme, descricao, dataCadastro, equipamento, classificacao, alarmesAtuados } = props.alarme;
    const position = props.position;

    //quantidade escolhida para mostrar os mais utilizados
    const ammountToHighlight = 3;

    return (
        <StyledCard>
            <StyledCard.Title>ALARME #{idAlarme}</StyledCard.Title>

            {position <= ammountToHighlight ? <StyledCard.Alert>{`${position}º mais utilizado`}</StyledCard.Alert> : null}
            

            <StyledCard.PropName>Descrição do alarme</StyledCard.PropName>
            <StyledCard.Prop>{descricao}</StyledCard.Prop>

            <StyledCard.PropName>Equipamento</StyledCard.PropName>
            <StyledCard.Prop>{equipamento.nomeEquipamento}</StyledCard.Prop>

            <StyledCard.PropName>Quantidade de utilizações</StyledCard.PropName>
            <StyledCard.Prop>{alarmesAtuados.length}</StyledCard.Prop>

            <StyledCard.PropName>Classificação</StyledCard.PropName>
            <StyledCard.Prop>{classificacao.nomeClassificacao}</StyledCard.Prop>

            <StyledCard.PropName>Cadastrado em</StyledCard.PropName>
            <StyledCard.Prop>{formatDate(dataCadastro)}</StyledCard.Prop>

        </StyledCard>
    )
}

