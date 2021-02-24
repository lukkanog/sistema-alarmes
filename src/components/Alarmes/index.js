import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Wrapper } from "../Wrapper";
import LoaderSpinner from "../Loader";
import { CardWrapper } from "../Card/styles";
import { Alarme } from "../Card/alarme.js";
import EmptyState from "../EmptyState";



function Alarmes() {
    const [alarmes, setAlarmes] = useState([]);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        loadData();
    }, [])


    const loadData = async () => {
        await api.get("alarmes")
            .then(response => setAlarmes(response.data))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }


    return (
        <Wrapper>
            <Wrapper.Container>

                <LoaderSpinner visible={isLoading} text="Carregando alarmes" />

                <CardWrapper>

                    {alarmes.map((item, index) => <Alarme key={index} alarme={item} />)}

                    {!alarmes.length > 0 ? <EmptyState /> : null}

                </CardWrapper>

            </Wrapper.Container>
        </Wrapper>
    )
}

export default Alarmes;