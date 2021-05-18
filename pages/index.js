import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Preetham veigas</title>
        <meta name="description" content="My personal document" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Hello, i am <strong>Preetham Veigas.</strong>  I’m a life explorer and software engineer.</p>
        You can contact me on <a target="_blank" href="https://www.linkedin.com/in/preetham-veigas-33b685170/">Linkedin</a>.
        <article>here i share my collection of life experiences!.</article>
      </main>
    </div>
  )
}
