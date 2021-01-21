//imports
import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

//Criando uma constante para armazenar meu nome
const name = 'Luiz Fernando'

//Titulo padrão para os sites
export const siteTitle = name

//Criando uma função default que recebe um children e um home 
export default function Layout({ children, home }) {
  //Retorno da função 
  return (
    //Uma div para conter o corpo do site

    //Em Head ficam contidos os meta dados da página

    //Com a Tag Meta podemos modificar alguns meta dados do site

    //'classnames' é uma biblioteca simples que permite alternar nomes de classes facilmente.
    //Podemos instalar usando 'npm install classnames'

    
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
        <meta
          name="luiz fernando"
          content="Aprendendo a construir um site pessoal usando Next.js"/>
        
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
        
        <meta name="og:title" content={siteTitle} />

        <meta name="twitter:card" content="summary_large_image" />
        
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}