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
        <p>Sou programador e estou me graduando em Ciência da computação na Universidade católica de brasília</p>
        <a href="https://instagram.com/luizpibo2">
          <p>
            Meu instagram
          </p>
        </a>
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