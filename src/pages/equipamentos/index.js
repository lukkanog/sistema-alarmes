import Head from "next/head";
import { Title, Subtitle } from "../../components/Text";
import { Wrapper } from "../../components/Wrapper";
import Header from "../../components/Header";
import Equipamentos from "../../components/Equipamentos";

export default function EquipamentosPage() {
  return (
    <div className="Equipamentos">

      <Head>
        <title>Equipamentos | Treetech Teste Prático</title>
      </Head>

        <main>
          <Header />

          <Wrapper>
            <Wrapper.Container>
              <Subtitle>Equipamentos</Subtitle>
            </Wrapper.Container>
          </Wrapper>

          <Equipamentos />

        </main>
    </div>
  )
}
