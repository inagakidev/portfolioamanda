import styles from './App.module.css'
import fotoPerfil from './assets/fotoperfilamanda.jpg'
import HeaderSection from './Componentes/HeaderSection/HeaderSection'
import { useState } from 'react'
import CardStack from './Componentes/CardStacks/CardStack'
import CardProject from './Componentes/CardProjects/CardProject'
import CardContact from './Componentes/CardContact/CardContact'
import { RiInstagramFill, RiGithubFill, RiLinkedinBoxFill, RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FiFigma, FiGithub } from "react-icons/fi";
import Footer from './Componentes/Footer/Footer'
import ContactForm from './Componentes/Form/Form'
import canilImg from '../src/assets/canilbeagle.png'

function App() {

  const cardStack = [
    {
      icon: <FaHtml5 color={'rgb(173, 96, 33)'} />,
      stackName: 'HTML5'
    },

    {
      icon: <FaCss3Alt color={'rgb(41, 122, 199)'} />,
      stackName: 'CSS3'
    },

    {
      icon: <IoLogoJavascript color={'rgb(224, 226, 122)'} />,
      stackName: 'JAVASCRIPT'
    },

    {
      icon: <FaReact color={'rgb(67, 139, 207)'} />,
      stackName: 'REACT.JS'
    },

    {
      icon: <RiNextjsFill color={'rgb(233, 238, 241)'} />,
      stackName: 'NEXT.JS'
    },

    {
      icon: <RiTailwindCssFill color={'rgb(41, 162, 199)'} />,
      stackName: 'TAILWIND'
    },

    {
      icon: <FiFigma color={'rgb(255, 255, 255)'} />,
      stackName: 'FIGMA'
    },

    {
      icon: <FiGithub color={'rgb(255, 255, 255)'} />,
      stackName: 'GITHUB'
    },

    {
      icon: <FaGitAlt color={'rgb(196, 67, 11)'} />,
      stackName: 'GIT'
    }

  ]
  const contact = [
    {
      icon: <RiLinkedinBoxFill />,
      link: 'https://www.linkedin.com/in/amanda-inagaki'
    },

    {
      icon: <RiInstagramFill/>,
      link: 'https://www.instagram.com/inagaki.dev/'
    },

    {
      icon: <RiGithubFill />,
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
      label: "04 — CONTATO",
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
            <div className={styles.cardsStacks}>
              <CardStack
                icon={cardStack[0].icon}
                stackName={cardStack[0].stackName}
              />

              <CardStack
                icon={cardStack[1].icon}
                stackName={cardStack[1].stackName}
              />

              <CardStack
                icon={cardStack[2].icon}
                stackName={cardStack[2].stackName}
              />

              <CardStack
                icon={cardStack[3].icon}
                stackName={cardStack[3].stackName}
              />

              <CardStack
                icon={cardStack[4].icon}
                stackName={cardStack[4].stackName}
              />

              <CardStack
                icon={cardStack[5].icon}
                stackName={cardStack[5].stackName}
              />

              <CardStack
                icon={cardStack[6].icon}
                stackName={cardStack[6].stackName}
              />

              <CardStack
                icon={cardStack[7].icon}
                stackName={cardStack[7].stackName}
              />

              <CardStack
                icon={cardStack[8].icon}
                stackName={cardStack[8].stackName}
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
                title="Site - Canil Mr. Beagle"
                description="Site institucional desenvolvido do zero para um canil, incluindo prototipação no Figma e desenvolvimento com HTML, CSS e JavaScript, com foco em experiência do usuário e responsividade. "
                tags={["HTML", "CSS","JavaScript","Figma"]}
                github="https://github.com/seu-repo"
                demo="https://canilmrbeagle.com.br"
                image={canilImg}
              />
              <CardProject
                title="Meu Projeto"
                description="Projeto incrível"
                tags={["React", "CSS"]}
                github="https://github.com/seu-repo"
                demo="https://seusite.com"
              />
              <CardProject
                title="Meu Projeto"
                description="Projeto incrível"
                tags={["React", "CSS"]}
                github="https://github.com/seu-repo"
                demo="https://seusite.com"
              />
              <CardProject
                title="Meu Projeto"
                description="Projeto incrível"
                tags={["React", "CSS"]}
                github="https://github.com/seu-repo"
                demo="https://seusite.com"
              />
            </div>
          </section>

          <section className={styles.contact}>
                 <div className={styles.contactText}>
                <HeaderSection
                  label={header[3].label}
                  titulo={header[3].titulo}
                  span={header[3].span}
                />
                <p>Aberta a projetos freelance, colaborações e oportunidades full-time. Vamos conversar.</p>

                <ContactForm/>
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

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App
