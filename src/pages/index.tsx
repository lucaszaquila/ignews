import Head from 'next/Head'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      
      <main className="{styles.contentContainer}">
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all the publication <br />
            <span>for $9.90 month</span>
          </p>
        </section>

        <img src="" alt="Girl coding" />
      </main>
    </>
  )
}