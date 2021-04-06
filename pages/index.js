import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from './components/layout'
import utilStyles from './styles/utils.module.css'

function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
<<<<<<< Updated upstream
        <p>Sou programador e estou me graduando em Ciência da computação na Universidade católica de brasília</p>
        <a href="https://instagram.com/luizpibo2">
          <p>
            Meu instagram
          </p>
        </a>
=======
        <ul className={utilStyles.buttonsGrid}>
          <li>
            <article className={utilStyles.article}>
              <h1>Instagram</h1>
              <Link href="https://instagram.com/luizpibo2">
                <p>
                  Meu instagram
                </p>
              </Link>
            </article>
          </li>
          
          <li>
            <article className={utilStyles.article}>
              <h1>Jogo da Velha</h1>
                <Link href="posts/jogoDaVelha">
                  <p>
                    Jogo da velha
                  </p>
                </Link>
            </article>
          </li>
          
          <li>
            <article className={utilStyles.article}>
              <h1>Relatorio</h1>
                <Link href="posts/relatorio">
                  <p>
                    relatorio
                  </p>
                </Link>
            </article>
          </li>

          <li>
            <article className={utilStyles.article}>
              <h1>C4</h1>
                <Link href="posts/c4">
                  <p>
                    C4
                  </p>
                </Link>
            </article>
          </li>
        </ul>
>>>>>>> Stashed changes
      </section>
      <footer>
        <span itemID='botaoGit'>
          <a href="https://github.com/luizpibo">
            <img src="/images/logoGit.png"/>
          </a>
        </span>
        <span>
          <a href="posts/relatorioViagem">
            <img src="/images/logoTecno.png"/>
          </a>
        </span>
      </footer>

    </Layout>
  )
}

export default Home