import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { Accordion } from "../components/Accordion";
import styles from "../styles/Home.module.scss";

interface HomeProps {
  setOption: React.Dispatch<React.SetStateAction<"general" | "privacy-policy">>;
}

const Home: NextPage<HomeProps> = ({ setOption }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title> Inicio | Portal de privacidade Alpar do Brasil</title>
        <meta
          name="description"
          content="Inicio | Portal de privacidade Alpar do Brasil"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.containerTitle}>
          <h1 className={styles.title}>
            Na Alpar do Brasil, levamos privacidade a sério.
          </h1>

          <p className={styles.description}>
            Nossa missão é criar conteúdos de qualidade que informem, divirtam e
            eduquem. Queremos que você entenda como usamos seus dados pessoais e
            como você pode geri-los.
          </p>
        </div>
        <div className={styles.images}>
          <Image src="/images/secure-files.svg" alt="" />
        </div>

        <div className={styles.content}>
          <h1>
            Privacidade não precisa ser complicado. Conheça os principais
            conceitos.
          </h1>

          <Accordion
            isStatusActive
            questions={[
              {
                title: "O que são dados pessoais?",
                response:
                  "Dados pessoais são informações relacionadas a pessoa natural identificada ou identificável. Exemplos de dados pessoais incluem nome, endereço de e-mail, telefone e CPF. Dados pessoais sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organizaçãode caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural são considerados dados pessoais sensíveis, e precisam ser tratados com ainda mais cautela pelas empresas.",
              },
              {
                title: "O que são cookies e trackers?",
                response:
                  "Trackers são ferramentas de observação na internet e cookies são o mais famoso tipo de tracker. Quando você acessa sites, eles podem enviar pequenos arquivos de texto (cookies) para o seu navegador para registrar o seu comportamento. É por causa de cookies, por exemplo, que você vê anúncios de coisas que você já procurou quando visita sites de mídias sociais, notícias e mais.",
              },
              {
                title: "O que é a LGPD?",
                response:
                  "LGPD é a sigla da Lei Geral de Proteção de Dados (Lei nº 13.709/2018). A LGPD estabelece regras sobre coleta, armazenamento e compartilhamento de dados pessoais, atribuindo mais proteção aos titulares de tais dados.",
              },
            ]}
          />
        </div>

        <div style={{ minHeight: 0 }} className={styles.content}>
          <h1>
            Confira nossa política e entenda como gerir seus dados pessoais.
          </h1>

          <nav>
            <h2>Política de Privacidade</h2>
            <p>
              Entenda quais dados pessoais coletamos e como eles são usados,
              compartilhados e protegidos. A política se aplica a todos os
              serviços e produtos da Alpar do Brasil, sejam impressos ou
              digitais, por meio de sites e aplicativos.
            </p>

            <Link href="privacy-policy">
              <a onClick={() => setOption("privacy-policy")}>
                Política de privacidade na íntegra <BiChevronRight />
              </a>
            </Link>
            <Link href="pdf/27-10-2021-Política_de_Privacidade.pdf">
              <a target="_blank">
                Baixar versão PDF <BiChevronRight />
              </a>
            </Link>
          </nav>
        </div>

        <footer className={styles.footer}>© 2021 Alpar do Brasil</footer>
      </main>
    </div>
  );
};

export default Home;
