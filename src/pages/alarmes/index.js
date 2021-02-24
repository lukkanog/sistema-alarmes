import Head from "next/head";
import { Subtitle } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import Header from "../../components/Header";
import Alarmes from "../../components/Alarmes";
import ErrorProvider from "../../contexts/ErrorContext";


export default function AlarmesPage() {
  return (
    <div className="Alarmes">
      <ErrorProvider>

        <Head>
          <title>Alarmes | Treetech Teste Prático</title>
        </Head>

        <main>
          <Header />

          <Wrapper>
            <Wrapper.Container>
              <Subtitle>Alarmes</Subtitle>
            </Wrapper.Container>
          </Wrapper>

          <Alarmes />
        </main>

      </ErrorProvider>
    </div>
  )
}
