import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Wrapper } from "../Wrapper";
import LoaderSpinner from "../Loader";
import { CardWrapper } from "../Card/styles";
import { Alarme } from "../Card/Alarme.js";
import EmptyState from "../EmptyState";
import { useError } from "../../contexts/ErrorContext";



function Alarmes() {
    const [alarmes, setAlarmes] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const { setError } = useError();

    useEffect(() => {
        loadData();
    }, [])


    const loadData = async () => {
        await api.get("alarmes")
            .then(response => handleData(response.data))
            .then(() => setLoading(false))
            .catch(err => setError(err))
    }

    const handleData = (data) => {
        const sortItems = (a, b) =>  a.alarmesAtuados.length > b.alarmesAtuados.length ? -1 : 1;
        const sortedItems = data.sort(sortItems);

        setAlarmes(sortedItems);

    }


    return (
        <Wrapper>
            <Wrapper.Container>

                <LoaderSpinner visible={isLoading} text="Carregando alarmes" />

                <CardWrapper>

                    {alarmes.map((item, index) => <Alarme key={index} alarme={item} position={ index+1}/>)}

                    {!alarmes.length > 0 ? <EmptyState /> : null}

                </CardWrapper>

            </Wrapper.Container>
        </Wrapper>
    )
}

export default Alarmes;