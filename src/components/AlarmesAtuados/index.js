import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Wrapper } from "../Wrapper";
import LoaderSpinner from "../Loader";


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

                <LoaderSpinner visible={isLoading} text="Carregando alarmes atuados"/>

                {alarmes.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.alarme.descricao}
                        </div>
                    )
                })}

            </Wrapper.Container>
        </Wrapper>
    )
}

export default AlarmesAtuados