import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Wrapper } from "../Wrapper";
import LoaderSpinner from "../Loader";
import { Card, CardWrapper } from "../Card";


function AlarmesAtuados() {
    const [alarmes, setAlarmes] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        await api.get("alarmesatuados")
            .then(response => setAlarmes(response.data))
            .catch(err => console.log(err))

        setLoading(false);
    }

    return (
        <Wrapper>
            <Wrapper.Container>

                <LoaderSpinner visible={isLoading} text="Carregando alarmes atuados" />

                <CardWrapper>

                    {alarmes.map((item, index) => {
                        return (
                            <Card key={index} alarme={item}>
                                {item.alarme.descricao}
                            </Card>
                        )
                    })}

                </CardWrapper>

            </Wrapper.Container>
        </Wrapper>
    )
}

export default AlarmesAtuados;