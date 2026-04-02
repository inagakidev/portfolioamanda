import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* ESQUERDA */}
        <div className={styles.brand}>
          <h2 className={styles.logo}>
            inagaki<span>.dev</span>
          </h2>
          <p className={styles.description}>
            Desenvolvendo interfaces modernas, responsivas e funcionais,
            com foco em experiência do usuário e performance.
          </p>
        </div>

        {/* DIREITA */}
        <div className={styles.navigation}>
          <div className={styles.column}>
            <h3>Navegação</h3>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Projetos</h3>
            <ul>
              <li><a href="#projetos">Portfolio</a></li>
              <li><a href="#projetos">Landing Pages</a></li>
              <li><a href="#projetos">Sites Responsivos</a></li>
              <li><a href="#projetos">UI Design</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className={styles.copy}>
        <p>© 2026 Amanda Inagaki Dias. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer