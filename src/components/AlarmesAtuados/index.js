import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Wrapper } from "../Wrapper";
import LoaderSpinner from "../Loader";
import { AlarmeAtuado, CardWrapper } from "../Card";


function AlarmesAtuados() {
    const [alarmes, setAlarmes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [sortType, setSortType] = useState('idAlarmeAtuado');


    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        const sortItems = (a, b) => {
            return (a[sortType] > b[sortType]) ? 1 : ((b[sortType] > a[sortType]) ? -1 : 0);
        };

        setAlarmes([...alarmes].sort(sortItems));
    }, [sortType]);

    const loadData = async () => {
        await api.get("alarmesatuados")
            .then(response => setAlarmes(response.data))
            .then(() => setLoading(false))
            .catch(err => setError(err.response.data))

    }

    return (
        <Wrapper>
            <Wrapper.Container>

                <LoaderSpinner visible={isLoading} text="Carregando alarmes atuados" />

                <label>
                    Ordenar por 
                    <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                        <option value="idAlarmeAtuado">Ordenação padrão</option>
                        <option value="dataEntrada">Data de entrada</option>
                        <option value="dataSaida">Data de saída</option>
                        {/* <option value="alarme.descricao">Descrição do alarme</option>
                        <option value="alarme.equipamento.nomeEquipamento">Descrição do equipamento</option> */}
                    </select>
                </label>
                <CardWrapper>

                    {alarmes.map((item, index) => {
                        return <AlarmeAtuado key={index} alarme={item} />
                    })}

                </CardWrapper>

            </Wrapper.Container>
        </Wrapper>
    )
}

export default AlarmesAtuados;