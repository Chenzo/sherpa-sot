import styles from './headerComponent.module.scss'
import Link from 'next/link'


export default function Header() {

    return (

        <header className={styles.header}>

            <div className={styles.container}>
            <Link href="/"><a> Sherpa Knowledge Repository</a></Link>

            <ul>
                <li><Link href="/things-to-do"><a>List of Things to Do</a></Link></li>
            </ul>
            </div>

        </header>


    )
}