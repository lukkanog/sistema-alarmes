import Head from "next/head";
import { Title, Subtitle } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
import Header from "../components/Header";
import AlarmesAtuados from "../components/AlarmesAtuados";

export default function Home() {
  return (
    <div className="Home">

      <Head>
        <title>Alarmes Atuados | Treetech Teste Prático</title>
      </Head>

      <main>
        <Header />

        <Wrapper>
          <Wrapper.Container>
            <Subtitle>Alarmes Atuados</Subtitle>
          </Wrapper.Container>
        </Wrapper>

        <AlarmesAtuados />

      </main>
    </div>
  )
}
