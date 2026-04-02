import styles from './App.module.css'
import fotoPerfil from './assets/fotoperfilamanda.jpg'
import HeaderSection from './Componentes/HeaderSection/HeaderSection'
import { useState } from 'react'
import CardStack from './Componentes/CardStacks/CardStack'
import CardProject from './Componentes/CardProjects/CardProject'
import CardContact from './Componentes/CardContact/CardContact'
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiInstagramFill} from "react-icons/ri";
import { RiGithubFill } from "react-icons/ri";
import Footer from "./Componentes/Footer/Footer"

function App() {
  const contact = [
    {
      icon: <RiLinkedinBoxFill />,
      label: 'Linkedln',
      value: "amanda-inagaki",
      link: 'https://www.linkedin.com/in/amanda-inagaki'
    },

    {
      icon: <RiInstagramFill />,
      label: 'Instagram',
      value: '@inagaki.dev',
      link: 'https://www.instagram.com/inagaki.dev/'
    },

    {
      icon: <RiGithubFill />,
      label: 'GitHub',
      value: "inagakidev",
      link: 'https://github.com/inagakidev'
    }
  ]

  const [menuAberto, setMenuAberto] = useState(false)
  const header = [
    {
      label: "01 — SOBRE",
      titulo: "Transformando Ideias em",
      span: "Experiências Digitais Eficientes"
    },

    {
      label: "02 — STACKS",
      titulo: "Tecnologias que ",
      span: "eu trabalho"
    },

    {
      label: "03 — PROJETOS",
      titulo: "Selecione ",
      span: "o Projeto"
    },

    {
      label: "03 — PROJETOS",
      titulo: "Selecione ",
      span: "o Projeto"
    },

    {
      label: "05 — CONTATO",
      titulo: "Vamos Criar Algo ",
      span: "Incrível Juntos"
    }
  ]

  return (
    <>
      <header>
        <h2 className={styles.logo}>inagaki<span className={styles.logoFinal}>.dev</span></h2>
        <button
          className={styles.hamburguer}
          onClick={() => setMenuAberto (!menuAberto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`${styles.menu} ${menuAberto ? styles.menuAberto : ''}`}>
          <span onClick={() => setMenuAberto(false)}>Sobre</span>
          <span onClick={() => setMenuAberto(false)}>Tecnologias</span>
          <span onClick={() => setMenuAberto(false)}>Projetos</span>
          <span onClick={() => setMenuAberto(false)}>Experiência</span>
          <span onClick={() => setMenuAberto(false)}>Contato</span>
        </div>
        <button className={styles.cta}>Vamos Conversar</button>
      </header>

      <main>
        <div className={styles.heroc}>
          <div className={styles.fotoPerfil}>
            <img src={fotoPerfil} alt="" />
          </div>

          <div className={styles.hero}>
            <h1 className={styles.headline}>Criando Experiências <br /> <span className={styles.textGradient}>Digitais Modernas</span></h1>
            <p className={styles.subheadline}>Construindo aplicações performáticas e escaláveis com tecnologias modernas e arquitetura limpa.</p>
            
            <div className={styles.buttonsHero}>
              <button className={styles.button1}>Ver Projetos</button>
              <button className={styles.button2}>Entre em Contato</button>
            </div>
          </div>
        </div>

          <section className={styles.secaoSobre}>
              <HeaderSection
                label={header[0].label}
                titulo={header[0].titulo}
                span={header[0].span}
              />

            <div className={styles.aboutMe}>
              <p>Sou desenvolvedora front-end com foco em criar interfaces modernas, responsivas e intuitivas. Tenho paixão por transformar conceitos em produtos funcionais, sempre priorizando performance, acessibilidade e uma boa experiência do usuário.</p>
              <br />
              <p>Atualmente, estou em constante evolução para me tornar uma desenvolvedora full stack, ampliando meus conhecimentos em back-end e arquitetura de sistemas. Busco unir código limpo com boas práticas de design, criando soluções que não só funcionam bem, mas também são fáceis de manter.</p>
            </div>
            
            <div className={styles.cards}>
              <div className={styles.cardItem}>
                <h3>1+</h3>
                <p>Anos de experiência</p>
              </div>
              <div className={styles.cardItem}>
                <h3>10+</h3>
                <p>Projetos feito</p>
              </div>
              <div className={styles.cardItem}>
                <h3>6+</h3>
                <p>Tecnologias</p>
              </div>
            </div>
          </section>

          <section className={styles.stacks}>
            <HeaderSection
                label={header[1].label}
                titulo={header[1].titulo}
                span={header[1].span}
              />
                  <div className={styles.cardMae}>
                    <CardStack
                      nameArea="Frontend"
                      stacks={[
                        { nome: "HTML", nivel: "Avançado" },
                        { nome: "CSS", nivel: "Avançado" },
                        { nome: "JavaScript", nivel: "Intermediário" },
                        { nome: "React", nivel: "Intermediário" },
                        { nome: "Git", nivel: "Básico" }
                      ]}
                    />
                    <CardStack
                      nameArea="Frontend"
                      stacks={[
                        { nome: "HTML", nivel: "Avançado" },
                        { nome: "CSS", nivel: "Avançado" },
                        { nome: "JavaScript", nivel: "Intermediário" },
                        { nome: "React", nivel: "Intermediário" },
                        { nome: "Git", nivel: "Básico" }
                      ]}
                    />

                    <CardStack
                      nameArea="Frontend"
                      stacks={[
                        { nome: "HTML", nivel: "Avançado" },
                        { nome: "CSS", nivel: "Avançado" },
                        { nome: "JavaScript", nivel: "Intermediário" },
                        { nome: "React", nivel: "Intermediário" },
                        { nome: "Git", nivel: "Básico" }
                      ]}
                    />
                  </div>
          </section>

          <section className={styles.projects}>
    
              <div className={styles.projectsText}>
                <HeaderSection
                  label={header[2].label}
                  titulo={header[2].titulo}
                  span={header[2].span}
                />
              </div>

            <div className={styles.projectsCards}>
              <CardProject
                title="E-commerce Platform"
                description="Scalable online store with payment integration."
                tags={["Next.js", "Stripe", "MongoDB"]}
              />
              <CardProject
                title="E-commerce Platform"
                description="Scalable online store with payment integration."
                tags={["Next.js", "Stripe", "MongoDB"]}
              />
              <CardProject
                title="E-commerce Platform"
                description="Scalable online store with payment integration."
                tags={["Next.js", "Stripe", "MongoDB"]}
              />
              <CardProject
                title="E-commerce Platform"
                description="Scalable online store with payment integration."
                tags={["Next.js", "Stripe", "MongoDB"]}
              />
            </div>
          </section>

          <section className={styles.contact}>
                 <div className={styles.contactText}>
                <HeaderSection
                  label={header[4].label}
                  titulo={header[4].titulo}
                  span={header[4].span}
                />
                <p>Aberta a projetos freelance, colaborações e oportunidades full-time. Vamos conversar.</p>
              </div>     

          <div className={styles.cardContact}>
            <CardContact
              icon={contact[0].icon}
                  label={contact[0].label}
                  value={contact[0].value}
                  link={contact[0].link}
            />
            <CardContact
              icon={contact[1].icon}
                  label={contact[1].label}
                  value={contact[1].value}
                  link={contact[1].link}
            />
            <CardContact
              icon={contact[2].icon}
                  label={contact[2].label}
                  value={contact[2].value}
                  link={contact[2].link}
            />
          </div>
          </section>

      </main>
      <Footer/>
    </>
  );
}

export default App
