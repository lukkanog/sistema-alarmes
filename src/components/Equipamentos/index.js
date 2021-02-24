import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useError } from "../../contexts/ErrorContext";
import { Wrapper } from "../Wrapper";
import LoaderSpinner from "../Loader";
import { CardWrapper } from "../Card/styles";
import { Equipamento } from "../Card/equipamento.js";
import EmptyState from "../EmptyState";



function Equipamentos() {
    const [equipamentos, setEquipamentos] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { setError } = useError();


    useEffect(() => {
        loadData();
    }, [])


    const loadData = async () => {
        await api.get("equipamentos")
            .then(response => setEquipamentos(response.data))
            .then(() => setLoading(false))
            .catch(err => setError(err))
    }


    return (
        <Wrapper>
            <Wrapper.Container>

                <LoaderSpinner visible={isLoading} text="Carregando equipamentos" />

                <CardWrapper>

                    {equipamentos.map((item, index) => <Equipamento key={index} equipamento={item} />)}

                    {!equipamentos.length > 0 ? <EmptyState /> : null}

                </CardWrapper>

            </Wrapper.Container>
        </Wrapper>
    )
}

export default Equipamentos;