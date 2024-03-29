"use client";

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Accordion } from "../components/Accordion";
import { SendMail } from "../components/SendMail";
import { Summary } from "../components/Summary";
import styles from "../styles/PrivacyPolicy.module.scss";

interface PrivacyPolicyProps {
  setOption: React.Dispatch<React.SetStateAction<"general" | "privacy-policy">>;
}

const PrivacyPolicy: NextPage<PrivacyPolicyProps> = ({ setOption }) => {
  useEffect(() => {
    setOption("privacy-policy");

    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Política de privacidade | Portal privacidade Alpar do Brasil do Brasil
        </title>
        <meta
          name="description"
          content="Política de privacidade | Portal privacidade Alpar do Brasil do Brasil"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.content}>
          <nav className={styles.containerSummary}>
            <Summary>
              <li
              // className={stylesSummary.active}
              >
                <a href="#dados-coletados">Dados coletados</a>
              </li>
              <li>
                <a href="#usamos">Como usamos</a>
              </li>
              <li>
                <a href="#compartilhamos">Como compartilhamos</a>
              </li>
              <li>
                <a href="#protegemos">Como protegemos</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </Summary>

            <div className={styles.link}>
              <Link href="pdf/27-10-2021-Política_de_Privacidade.pdf">
                <a target="_blank">
                  Baixar versão PDF <BiChevronRight />
                </a>
              </Link>
            </div>
          </nav>

          <div className={styles.containerData}>
            <h1 id="dados-coletados" className={styles.title}>
              Como coletamos dados pessoais sobre você?
            </h1>
            <p className={styles.subTitle}>
              Em tudo que a gente faz, buscamos proteger nossos dados e
              informações. A gente sabe que para você também é assim. Seus dados
              são bens valiosos que devem ser preservados. Por isso você precisa
              saber exatamente como eles podem ser utilizados. Foi justamente
              para isso que criamos essa Política de Privacidade.
            </p>
            <Accordion
              marginZero
              questions={[
                {
                  title: "Pelo seu cadastro na Alpar do Brasil",
                  subTitle:
                    "Quando você cria uma conta em algum dos portais da Alpar do Brasil do Brasil, nós perguntamos dados como nome, e-mail, data de nascimento, gênero e endereço para que você crie um login e senha.",
                  response:
                    "Coletamos alguns Dados sobre você quando você cria a sua conta, para que você crie um login e senha. Durante o processo de cadastro, nós solicitamos dados como seu nome completo, endereço de e-mail, data de nascimento, gênero, localização, CPF, endereço, telefone e, no caso aquisição de algum produto, os dados de cobrança.",
                },
                {
                  title: "Pela sua navegação nos nossos sites",
                  subTitle:
                    "Coletamos Dados quando você acessa os nossos sites, realiza buscas e preenche formulários.",
                  response:
                    "Os dados coletados a partir do seu acesso aos Serviços incluem: sua localização aproximada (latitude e longitude); seu endereço de IP; informações do seu dispositivo de acesso (como identificador da unidade, identificador de publicidade, nome e tipo de sistema operacional); informação da sua conexão de internet; tipo do seu navegador e as páginas e conteúdos que você acessa em nossos Serviços.",
                },
                {
                  title: "Através de terceiros",
                  subTitle:
                    "Alguns dos seus Dados podem ser obtidos por nós através de fontes disponíveis ao público, prestadores de serviços e nossos parceiros.",
                  response:
                    "Coletamos Dados sobre você de fontes disponíveis ao público, prestadores de serviços e parceiros que nos forneçam os seus Dados de acordo com a legislação aplicável.",
                },
                {
                  title: "Através do uso de cookies",
                  subTitle:
                    "Os cookies são usados para observar hábitos de visita. Eles nos permitem lembrar suas preferências, entregar anúncios e analisar audiências.",
                  response: [
                    {
                      type: 1,
                      title: "O que são cookies e qual sua utilidade",
                      data: "Cookies são pequenos arquivos de texto enviados e armazenados no seu computador. Estes pequenos arquivos servem para reconhecer, acompanhar e armazenar a sua navegação como usuário na Internet.",
                    },
                    {
                      type: 1,
                      title: "Qual a utilidade dos cookies",
                      data: "O uso de cookies para acompanhar e armazenar informações possibilitará à Alpar do Brasil oferecer um serviço mais personalizado, de acordo com as características e interesses de seus usuários, possibilitando, inclusive, a publicidade específica para cada pessoa, beneficiando a experiência do usuário na Internet.",
                    },
                  ],
                },
              ]}
            />

            <h1 id="usamos" className={styles.title}>
              Como usamos os seus Dados?
            </h1>
            <p className={styles.subTitle}>Utilizamos seus Dados para:</p>
            <Accordion
              marginZero
              questions={[
                {
                  title: "Fornecer Serviços a você",
                  subTitle:
                    "Seus Dados são coletados para que possamos entregar conteúdo, processar pagamentos e direcionar serviços que possam ser do seu interesse.",
                  response: [
                    {
                      type: 2,
                      data: [
                        "Cumprir com os termos e condições desta Política, dos Termos de Uso e dos contratos de assinatura (conforme aplicável);",
                        "Viabilizar a compra e entrega dos nossos produtos, através de e-commerce;",
                        "Entregar conteúdo impresso;",
                        "Processar o pagamento, no caso de você contratar um Serviço pago;",
                        "Confirmar e completar seus Dados, conforme a relação estabelecida com você;",
                        "Cumprir as exigências de promoções, ações comerciais ou concursos, no caso de promoções, ações comerciais concursos realizados pela Alpar do Brasil, ou patrocinados por outras empresas, ou ainda, por meio de parcerias com a Alpar do Brasil, desde que você tenha concordado em participar de tais promoções ou concursos;",
                        "Enviar confirmações e atender a seus pedidos, no caso dos Serviços pagos; ",
                        "Obter histórico de crédito para ajudar a detectar e evitar casos de fraude;",
                      ],
                    },
                  ],
                },
                {
                  title: "Nos comunicar com você",
                  subTitle:
                    "Coletamos seus Dados para aprimorar nossos serviços, responder quando você entra em contato e para lhe manter informado sobre assuntos relevantes.",
                  response: [
                    {
                      type: 2,
                      data: [
                        "Responder quando você entra em contato com a Alpar do Brasil, conforme a relação estabelecida com você;",
                        "Realizar enquetes e pesquisas com o intuito de testar, resolver problemas, aprimorar ou avaliar nossos Serviços;",
                        "Comunicar sobre eventos, promoções e/ou anúncios conduzidos por nós e/ou pelas Empresas Relacionadas (conforme definido da seção “Com quem compartilhamos seus Dados” abaixo) e/ou, ainda, por nossos parceiros e anunciantes, em sua conta de e-mail, por mensagem de texto, aplicativo de mensagens, ligação telefônica (incluindo telemarketing) e notificação instantânea (push);",
                        "Informar sobre mudanças em nossos termos, serviços ou políticas (incluindo esta Política);",
                        "Ofertar novos Serviços a você, através da sua conta de e-mail, por mensagem de texto, aplicativo de mensagens, ligação telefônica (incluindo telemarketing) e notificação instantânea (push), inclusive aqueles cuja contratação você iniciou, mas não finalizou;",
                      ],
                    },
                  ],
                },
                {
                  title: "Prover segurança e proteger direitos",
                  subTitle:
                    "Mantemos determinados Dados a fim de evitar atividades ilegais, fraudulentas e suspeitas e para promover suporte técnico e operacional.",
                  response: [
                    {
                      type: 2,
                      data: [
                        "Prover suporte técnico e operacional e garantir a segurança e a funcionalidade dos Serviços;",
                        "Prevenir atividades ilegais, fraudulentas ou suspeitas, que possam provocar danos à Alpar do Brasil ou a terceiros;",
                        "Prevenir problemas técnicos ou de segurança;",
                        "Proteger nossos direitos e propriedades, inclusive de invasões e hackeamento;",
                        "Proteger os direitos de propriedade de terceiros que usam nossos Serviços;",
                      ],
                    },
                  ],
                },

                {
                  title: "Personalizar a sua experiência",
                  subTitle:
                    "Seus Dados nos ajudam a criar uma experiência mais personalizada, selecionando conteúdos e publicidades de acordo com os seus interesses.",
                  response: [
                    {
                      type: 2,
                      data: [
                        "Selecionar e personalizar anúncios para você, dentro ou fora dos Serviços;",
                        "Customizar os conteúdos e a publicidade que mostramos em nossos Serviços;",
                        "Fazer inferências sobre conteúdos e temas que possam ser do seu interesse;",
                        "Identificar e recomendar conteúdos, produtos e serviços da Alpar do Brasil e das Empresas Relacionadas que possam ser do seu interesse;",
                        "Criar um perfil sobre você, personalizando a sua experiência em nossos Serviços e nos serviços das Empresas Relacionadas;",
                      ],
                    },
                  ],
                },
                {
                  title:
                    "Aprimorar, analisar os Serviços e desenvolver novos produtos e serviços",
                  subTitle:
                    "Seus Dados podem ser usados para atividades de pesquisa, análises e inovação dos nossos produtos e serviços.",
                  response: [
                    {
                      type: 2,
                      data: [
                        "Desenvolver, avaliar o desempenho, testar e aprimorar os Serviços, bem como novos conteúdos e serviços;",
                        "Realizar atividades de pesquisa, análises e inovação relacionadas à performance e aprimoramento dos nossos Serviços, ou os das Empresas Relacionadas, ou ainda de nossos parceiros e patrocinadores;",
                        "Apoiar anunciantes e parceiros na avaliação da efetividade e alcance de anúncios e também para entender os perfis de pessoas que acessam tais anúncios;",
                        "Monitorar atividades e tendências de uso;",
                        "Mensurar interações e audiência dos Serviços;",
                        "Desenvolver aprendizado de máquina;",
                        "Reconhecer e acompanhar a sua navegação;",
                      ],
                    },
                  ],
                },
                {
                  title: "Cumprir nossas obrigações legais e regulatórias",
                  subTitle:
                    "Os seus Dados podem ser necessários para que possamos cumprir determinações e medidas legais e regulatórias, sejam judiciais e administrativas.",
                  response: [
                    {
                      type: 2,
                      data: [
                        "Cumprir determinações legais, judiciais e administrativas e ofícios de autoridades competentes;",
                        "Tomar ou provocar medidas legais, judiciais e administrativas para defender nossos direitos e direitos de terceiros, inclusive em qualquer processo judicial ou administrativo;",
                      ],
                    },
                  ],
                },
                {
                  title: "Promover o bem-estar social",
                  subTitle:
                    "Seus Dados podem nos ajudar a realizar, apoiar e incentivar pesquisas, projetos sociais e iniciativas relacionadas ao bem-estar social, cidadania, saúde, educação e cultura.",
                  response:
                    "Realizar, apoiar e incentivar pesquisas, projetos sociais e iniciativas relacionadas ao bem-estar social geral, cidadania, saúde, educação e cultura.",
                },
                {
                  title: "Utilizar Dados obtidos de terceiros",
                  subTitle:
                    "Os Dados obtidos de terceiros são utilizados conforme a lei aplicável e nos termos de nossas políticas.",
                  response:
                    "Utilizar os Dados com as mesmas finalidades permitidas na forma da lei ao terceiro que compartilhou seus dados com a Alpar do Brasil, assim como nos termos desta Política.",
                },
              ]}
            />
            <h1 id="compartilhamos" className={styles.title}>
              Com quem compartilhamos os seus Dados?
            </h1>
            <p className={styles.subTitle}>
              Podemos compartilhar seus Dados com terceiros, que seguem nossos
              padrões de segurança e confidencialidade.
            </p>
            <Accordion
              marginZero
              questions={[
                {
                  title: "Terceiros e parceiros",
                  subTitle:
                    "Podemos compartilhar seus Dados com terceiros, que seguem nossos padrões de segurança e confidencialidade.",
                  response: [
                    {
                      type: 1,
                      title: "",
                      data: "Seus Dados serão compartilhados com as categorias de terceiros (abaixo) (em conjunto, “Parceiros”) sempre de acordo com essa Política, o termo de uso do respectivo Serviço (quando houver), a legislação aplicável, para os fins abaixo estabelecidos.",
                    },
                    {
                      type: 1,
                      title: "Patrocinadores e Anunciantes",
                      data: "Para fins de cumprimento de exigências de ações comerciais, promoções ou concursos, no caso de ações comerciais, promoções ou concursos patrocinados por outras empresas ou por meio de parcerias com a Alpar do Brasil, desde que você tenha concordado em participar de tais ações ou promoções e concursos.",
                    },
                    {
                      type: 1,
                      title: "Empresas de pesquisa",
                      data: "Para oferecer um serviço mais adequado ao seu perfil, nós e/ou nossos parceiros de pesquisa entraremos em contato com você para realizar enquetes e pesquisas com o intuito de testar, resolver problemas ou avaliar nossos Serviços.",
                    },
                    {
                      type: 1,
                      title: "Empresas Relacionadas",
                      data: "Para (i) identificar produtos e serviços das Empresas Relacionadas que possam ser do seu interesse; (ii) criar um perfil mais personalizado sobre você com o propósito de ajudar a personalizar a sua experiência nos serviços de Empresas Relacionadas; (iii) ofertar publicidade baseada em seus interesses; (iv) realizar pesquisas e análises para auxiliar na melhoria dos serviços das Empresas Relacionadas (por exemplo, recomendando a você programas que possam ser do seu interesse); e (v) comunicar ações comerciais, promoções ou concursos conduzidos pelas Empresas Relacionadas e/ou pela Alpar do Brasil em parceria com as Empresas Relacionadas. Por Empresas Relacionadas entendem-se todas empresas que são ou venham a ser controladas, controladoras, coligadas ou estar sob controle comum da Alpar do Brasil.",
                    },
                    {
                      type: 1,
                      title:
                        "Prestadores de Serviços de Tecnologia da Informação",
                      data: "Para (i) prestar serviços de nuvem para a nossa plataforma; (ii) hospedar os Serviços e conteúdos; e (iii) fornecer suporte técnico e operacional para os Serviços. Nestas circunstâncias, seus Dados serão armazenados e processados em plataformas de terceiros, que podem estar localizadas no Brasil ou no exterior.",
                    },
                    {
                      type: 1,
                      title: "Prestador de Serviços de Suporte Técnico",
                      data: "Para que terceiros que nos prestem serviços de suporte técnico forneçam assistência aos usuários ou assinantes. Nestas circunstâncias, seus Dados serão processados por tais terceiros.",
                    },
                    {
                      type: 1,
                      title: "Prestadores de Serviços de Marketing",
                      data: "Para oferecer anúncio relevante ao seu perfil, e-mail marketing, telemarketing, SMS, notificação instantânea (push), contamos com serviços de terceiros.",
                    },
                    {
                      type: 1,
                      title:
                        "Instituições Financeiras, Provedores de Meios de Pagamento, Integradores de Meios de Pagamento e Empresas de Cartões de Crédito",
                      data: "Para processar o pagamento no caso de você contratar um Serviço pago, vamos compartilhar o seu número de cartão de crédito, dados bancários, dados de cobrança e informações de contato com instituições financeiras, provedores de meios de pagamento, integradores de meios de pagamento e empresas de cartões de crédito.",
                    },
                    {
                      type: 1,
                      title: "Parceiros de Análise de Dados e de Crédito",
                      data: "Para confirmar e completar seus Dados, cruzaremos os Dados que você nos fornece com aqueles que você compartilhou com empresas de análise de Dados, inclusive de crédito.",
                    },
                    {
                      type: 1,
                      title: "Autoridade Governamentais",
                      data: "Para (i) cumprir determinações legais, judiciais e administrativas e também cumprir ofícios de autoridades competentes e (ii) tomar ou provocar medidas legais, judiciais e administrativas para defender nossos direitos previstos nesta Política e nos Termos de Uso, inclusive em qualquer processo judicial ou administrativo. Por Autoridades Governamentais entendem-se autoridades policiais, entidades públicas e/ou outras organizações governamentais.",
                    },
                    {
                      type: 1,
                      title: "Entidades de segurança e prevenção a fraudes",
                      data: "Para (i) cumprir obrigação contratual; (ii) exercitar os termos e condições desta Política e/ou dos Termos de Uso e/ou contratos de assinatura aos quais você aceitou; (iii) prevenir atividades ilegais, fraudulentas ou suspeitas; (iv) prevenir problemas técnicos ou de segurança; e (v) denunciar violações e/ou proteger nossos direitos e propriedades.",
                    },
                    {
                      type: 1,
                      title: "Parceiros de Mensuração.",
                      data: "Para realizar análises de audiência, alcance e relevância e relatório de mensuração dos Serviços.",
                    },
                    {
                      type: 1,
                      title: "Parceiros de Negócios",
                      data: "Para (i) aprimorar nossos Serviços; (ii) ampliar nossos negócios; (iii) desenvolver novos negócios, inclusive negócios que envolvam a prestação de serviços a terceiros de complementação de Dados, para fins de facilitar seu cadastro e melhorar sua experiência nos produtos e serviços dos parceiros.",
                    },
                  ],
                },
              ]}
            />

            <h1 id="protegemos" className={styles.title}>
              Como protegemos os seus Dados?
            </h1>
            <p className={styles.subTitle}>
              Adotamos práticas e tecnologias alinhadas aos padrões técnicos e
              regulatórios de mercado, bem como controles que são sempre
              revisados e aprimorados.
            </p>
            <Accordion
              marginZero
              questions={[
                {
                  title: "Dados anonimizados",
                  subTitle:
                    "Os seus dados são coletados e tratados de forma que você não seja identificado pessoalmente.",
                  response:
                    "Além de tratarmos os Dados de acordo com esta Política, coletamos e tratamos também seus dados de forma anonimizada, ou seja, de modo a que você não seja identificado pessoalmente.",
                },
              ]}
            />
            <h1 id="contato" className={styles.title}>
              Contato
            </h1>
            <p className={styles.subTitle}>
              Caso precise de qualquer suporte ou tenha alguma dúvida, pedido ou
              sugestão em relação a essa Política, somos todos ouvidos.
            </p>
            <Accordion
              marginZero
              questions={[
                {
                  title:
                    "Como podemos avisar você sobre alterações na Política",
                  response: [
                    {
                      type: 1,
                      title: "",
                      data: "Estamos sempre melhorando nossa Política e as mudanças serão refletidas nesta página. Então, antes de usar um de nossos Serviços dê uma olhadinha aqui. Você sempre será avisado sobre qualquer alteração, seja através de aviso no Portal da Privacidade, notificação instantânea (push) ou através de outros meios.",
                    },
                    {
                      type: 1,
                      title: "",
                      data: "Quando publicarmos alterações na Política, atualizaremos a data em que a última alteração foi publicada.",
                    },
                    {
                      type: 1,
                      title: "",
                      data: "Lembre-se: Ao continuar a acessar os Serviços depois que tais alterações passarem a valer, você estará concordando em estar vinculado à nova versão da Política.",
                    },
                  ],
                },
                {
                  title: "Como entrar em contato",
                  response:
                    "Essa Política é parte de um processo contínuo que busca utilizar suas informações da maneira mais segura e ética. Totalmente pensado para você. Por isso, é muito importante para gente ouvir de você e conhecer suas impressões sobre o que conversamos aqui. O encarregado pelas questões de privacidade na Alpar do Brasil é o Vinicius Campos. Você poderá entrar em contato preenchendo o formulário abaixo:",
                  Component: SendMail,
                },
              ]}
            />

            <div style={{ marginBottom: "10rem", marginTop: "5rem" }} />
            <footer className={styles.footer}>
              © 2021 Alpar do Brasil do Brasil
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
