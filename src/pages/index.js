import Head from "next/head";
import { Title, Subtitle } from "../components/Text";

export default function Home() {
  return (
    <div className="Home">

      <Head>
        <title>Alarmes Atuados | Treetech Teste Prático</title>
      </Head>

      <main>
        <Title>Alarmes atuados</Title>
      </main>
    </div>
  )
}
