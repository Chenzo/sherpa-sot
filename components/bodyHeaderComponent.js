import styles from './bodyHeaderComponent.module.scss'

export default function BodyHeader() {

    return (

        <div className={styles.bodyHead}>


            <div className={styles.shapes_right}></div>
            <div className={styles.shapes_left}></div>
            <div className={styles.container}>
                <h1>Sea Of Thieves Documentation</h1>
            </div>
           

        </div>


    )
}