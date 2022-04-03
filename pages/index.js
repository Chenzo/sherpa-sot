import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/headerComponent'
import BodyHeader from '../components/bodyHeaderComponent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sea Of Thieves | Sherpa Repository | Keelhauled Podcast</title>
        <meta name="description" content="A repository of knowledge and information collected by many pirates | help or get help at the Keelhauled Podcast Discord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className={styles.mainHome}>
        {/* <BodyHeader></BodyHeader> */}
        This is just a place where we&apos;re (I&apos;m?) storing things I think need to exist outside discord
      </main>

      {/* <footer>
       FEET FEET
      </footer> */}
    </div>
  )
}
