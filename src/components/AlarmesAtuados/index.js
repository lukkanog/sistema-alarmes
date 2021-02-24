import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Wrapper } from "../Wrapper";
import LoaderSpinner from "../Loader";
import { AlarmeAtuado, CardWrapper } from "../Card";


function AlarmesAtuados() {
    const [alarmes, setAlarmes] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        await api.get("alarmesatuados")
            .then(response => setAlarmes(response.data))
            .then(() => setLoading(false))
            .catch(err => console.log(err))

    }

    return (
        <Wrapper>
            <Wrapper.Container>

                <LoaderSpinner visible={isLoading} text="Carregando alarmes atuados" />

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