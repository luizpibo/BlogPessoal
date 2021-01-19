import Head from 'next/head'
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
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://instagram.com/luizpibo2">instagram</a>.)
        </p>
      </section>
    </Layout>
  )
}

export default Home