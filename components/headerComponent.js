import styles from './headerComponent.module.scss'
import Link from 'next/link'


export default function Header() {

    return (

        <header className={styles.header}>

            <div className={styles.container}>
            <h2><Link href="/"><a> Sherpa Knowledge Repository</a></Link></h2>

            <ul className={styles.headLinks}>
                <li><Link href="/things-to-do"><a>List of Things to Do</a></Link></li>
                <li>|</li>
                <li><Link href="/definition-of-toxic"><a>Definition of Toxic</a></Link></li>
            </ul>
            </div>

        </header>


    )
}