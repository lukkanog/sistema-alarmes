import React, { useState } from "react";
import { StyledCard } from "./styles";
import Loader from "react-loader-spinner";
import Toggle from 'react-toggle';
import "react-toggle/style.css";

import api from "../../services/api";



export function AlarmeAtuado(props) {
    const { alarme, idAlarmeAtuado, dataEntrada, dataSaida, ativo } = props.alarme;

    const [ loading, setLoading ] = useState(false);


    const handleToggleChange = async (id) => {
        setLoading(true);

        await api.patch(`alarmesatuados/${id}`)
            .then(response => console.log(response.data))
            .then(setTimeout(() => {
                setLoading(false);
            }, 2000))
            .catch(error => console.log(error))

    }


    return (
        <StyledCard>
            <StyledCard.Title>ALARME #{alarme.idAlarme}</StyledCard.Title>

            <StyledCard.PropName>Descrição do alarme</StyledCard.PropName>
            <StyledCard.Prop>{alarme.descricao}</StyledCard.Prop>


            <StyledCard.PropName>Descrição do equipamento</StyledCard.PropName>
            <StyledCard.Prop>{alarme.equipamento.nomeEquipamento}</StyledCard.Prop>

            <StyledCard.PropName>Data de entrada</StyledCard.PropName>
            <StyledCard.Prop>{formatDate(dataEntrada)}</StyledCard.Prop>

            <StyledCard.PropName>Data de saída</StyledCard.PropName>
            <StyledCard.Prop>{formatDate(dataSaida)}</StyledCard.Prop>

            <StyledCard.PropName>Status</StyledCard.PropName>

            <StyledCard.FlexGroup>
                <Toggle
                    defaultChecked={ativo}
                    icons={false}
                    onChange={() => handleToggleChange(idAlarmeAtuado)}
                    disabled={loading}
                />

                <Loader
                    type="ThreeDots"
                    color="#ED6A5A"
                    height={"1rem"}
                    visible={loading}
                />
            </StyledCard.FlexGroup>


        </StyledCard>
    )
}



const formatDate = date => {
    const splitDate = date.split("T")[0];
    const year = splitDate.split("-")[0];
    const month = splitDate.split("-")[1];
    const day = splitDate.split("-")[2];

    return (day + "/" + month + "/" + year);
}