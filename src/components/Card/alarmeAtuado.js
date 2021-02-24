import React, { useState } from "react";
import { StyledCard } from "./styles";
import Loader from "react-loader-spinner";
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import formatDate from "../../utils/date";
import api from "../../services/api";
import { useError } from "../../contexts/ErrorContext";


export function AlarmeAtuado(props) {
    const { alarme, idAlarmeAtuado, dataEntrada, dataSaida, ativo } = props.alarme;

    const [ loading, setLoading ] = useState(false);

    const { setError } = useError();


    const handleToggleChange = async (id) => {
        setLoading(true);

        await api.patch(`alarmesatuados/${id}`)
            .then(response => console.log(response.data))
            .then(setTimeout(() => {
                setLoading(false);
            }, 2000))
            .catch(error => setError(error))

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