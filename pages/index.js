import Head from 'next/head'
import Layout, { siteTitle } from './components/layout'
import utilStyles from './styles/utils.module.css'
import Link from 'next/link'

function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Sou programador e estou me graduando em Ciência da computação na Universidade católica de brasília</p>
        <Link href="https://instagram.com/luizpibo2">
          <p>
            Meu instagram
          </p>
        </Link>
        <Link href="posts/jogoDaVelha">
          <p>
            Jogo da velha
          </p>
        </Link>
        <Link href="posts/first-post">
          <p>
            Relatório
          </p>
        </Link>
      </section>
      <footer>
        <span itemID='botaoGit'>
          <a href="https://github.com/luizpibo">
            <img src="/images/logoGit.png">
            </img>
          </a>
        </span>
      </footer>
    </Layout>
  )
}

export default Home