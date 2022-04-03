import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/headerComponent'
import BodyHeader from '../components/bodyHeaderComponent'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Things to do in the Sea Of Thieves | Sherpa Repository | Keelhauled Podcast</title>
        <meta name="description" content="A repository of knowledge and information collected by many pirates | help or get help at the Keelhauled Podcast Discord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main className={styles.mainHome}>
        {/* <BodyHeader></BodyHeader> */}

        <h1>Definition of Toxic</h1>

        <ol className={styles.toxicList}>
            <li><span>Hate speech:</span> Insults based on religion, ethnicity, nationality, or other personal information. </li>
            <li><span>Threats of violence:</span> Threats of physical abuse, vandalism, arson, sabotage, possession, or use of weapons or other dangerous act. </li>
            <li><span>Sexual harassment:</span> Insults or comments based on gender, including threats, the criticism of women and their interests, and stalking. </li>
            <li><span>Hate raiding:</span> Purposefully infiltrating the gaming space of another with the intention of spreading hate/harassment. </li>
            <li><span>Doxxing:</span>  Publicly sharing and/or publishing another player's identifying information. </li>
            <li><span>In-game cheating:</span> Using methods to create advantage beyond normal gameplay in order to make the game easier for oneself. </li>
            <li><span>Inhibiting team:</span> Inhibiting your own team from being successful in winning. </li>
        </ol>
      </main>

      {/* <footer>
      join us
      </footer> */}
    </div>
  )
}
