import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Wrapper } from "../Wrapper";
import LoaderSpinner from "../Loader";
import { CardWrapper } from "../Card/styles";
import { AlarmeAtuado } from "../Card/alarmeAtuado";
import { SearchInput } from "../SearchInput";
import { Select } from "../Select";
import EmptyState from "../EmptyState";



function AlarmesAtuados() {
    const [alarmes, setAlarmes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [sortType, setSortType] = useState('idAlarmeAtuado');


    useEffect(() => {
        loadData();
    }, [])

    //para mudanças de ordenação
    useEffect(() => {

        const sortItems = (a, b) =>  a[sortType] > b[sortType] ? -1 : 1;
        

        setAlarmes([...alarmes].sort(sortItems));


    }, [sortType]);
    

    const loadData = async () => {
        await api.get("alarmesatuados")
            .then(response => setAlarmes(response.data))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }

    const handleTextFilter = (e) => {
        if (!e.target.value) {
            loadData();
        }

        const filteredList = [...alarmes].filter(item => {
            return item.alarme.descricao.toLowerCase().includes(e.target.value.toLowerCase())
        })

        setAlarmes(filteredList);
    }

    return (
        <Wrapper>
            <Wrapper.Container>

                <LoaderSpinner visible={isLoading} text="Carregando alarmes atuados" />

                <Select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                    <option value="idAlarmeAtuado">Ordenação padrão</option>
                    <option value="dataEntrada">Data de entrada</option>
                    <option value="dataSaida">Data de saída</option>
                    
                    {/* fixme */}
                    {/* <option value="ativo">Status</option> */}
                    {/* <option value="alarme">Descrição do alarme</option> */}
                    {/* <option value="equipamento">Descrição do equipamento</option> */}
                </Select>

                <SearchInput onChange={handleTextFilter} name="search" id="search" placeholder="Insira a descrição do alarme procurado" />

                <CardWrapper>

                    {alarmes.map((item, index) => <AlarmeAtuado key={index} alarme={item} />)}

                    {!alarmes.length > 0 ? <EmptyState /> : null}

                </CardWrapper>

            </Wrapper.Container>
        </Wrapper>
    )
}

export default AlarmesAtuados;