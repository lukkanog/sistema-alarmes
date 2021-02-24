import Head from "next/head";
import { Subtitle } from "../components/Text";
import { Wrapper } from "../components/Wrapper";
import Header from "../components/Header";
import AlarmesAtuados from "../components/AlarmesAtuados";
import ErrorProvider from "../contexts/ErrorContext";

export default function Home() {
  return (
    <div className="Home">
      <ErrorProvider>

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
      </ErrorProvider>
    </div>
  )
}
