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

<h1>A List of things to do in Sea Of Thieves</h1>

<ul>
    <li>World Events:
        <ul>
        <li>Skeleton Fort</li>
        <li>Skeleton Fleet</li>
        <li>Ashen Winds Vortex</li>
        <li>Fort of Fortune</li>
        <li>Fort of the Damned</li>
        <li className={styles.struck}>Flameheart Fleet</li>
        </ul>
    </li>
    <li>Tall Tales:
        <ul>
            <li>Maiden Voyage</li>
            <li>Shores of Gold:
                <ul>
                    <li>The Shroudbreaker</li>
                    <li>The Cursed Rogue</li>
                    <li>The Legendary Storyteller</li>
                    <li>Stars of a Thief</li>
                    <li>Wild Rose</li>
                    <li>The Art of the Trickster</li>
                    <li>The Fate of the Morningstar</li>
                    <li>Shores of Gold</li>
                </ul>
            </li>
            <li>Ashen Age:
                <ul>
                <li>The Seabound Soul</li>
                <li>Heart of Fire</li>
                </ul>
            </li>
            <li>Pirates Life:
                <ul>
                <li>A Pirates Life</li>
                <li>The Sunken Pearl</li>
                <li>Captains of the Damned</li>
                <li>Dark Brethern</li>
                <li>Lords of the Sea</li>
                </ul>
            </li>
        </ul>
    </li>


    <li>Siren Shrines
        <ul>
            <li>Shrine of the Coral Tomb</li>
            <li>Shrine of Ocean&apos;s Fortune</li>
            <li>Shrine of Ancient Tears </li>
            <li>Shrine of Tribute</li>
            <li>Shrine of Hungering</li>
            <li>Shrine of Flooded Embrace</li>
        </ul>
    </li>
    <li>Siren Treasuries:
        <ul>
            <li>Treasury of Sunken Shores</li>
            <li>Treasury of the Lost Ancients</li>
            <li>Treasury of the Secret Wilds</li>
        </ul>
    </li>


    <li>Sea Forts:
        <ul>
        <li>Royal Crest Fortress</li>
        <li>Imperial Crown Fortress</li>
        <li>Ancient Gold Fortress</li>
        <li>Old Brinestone Fortress</li>
        <li>Traitor&apos;s Fate Fortress</li>
        <li>Mercy&apos;s End Fortress</li>
        </ul>
    </li>
    <li>Skeleton Thrones:
        <ul>
            <li>Small:
                <ul>
                    <li>Thieves Haven</li>
                    <li>Mermaid&apos;s Hideaway</li>
                    <li>Devil&apos;s Ridge</li>
                    <li>Hidden Spring Keep</li>
                    <li>k-9</li>
                </ul>
            </li>
            <li>Large:
                <ul>
                    <li>Cannon Cove</li>
                    <li>Plunder Outpost</li>
                    <li>Shipwreck Bay</li>
                    <li>Smuggler&apos;s Bay</li>
                    <li>Marauder&apos;s Arch</li>
                </ul>
        </li>
        </ul>
    </li>
    <li>Find Morrow&apos;s Crew:
        <ul>
            <li>Fetcher Farley</li>
            <li>Ruby Carter</li>
            <li>Old Coop</li>
            <li>Flintlock Bert</li>
            <li>Hepzibah Jones</li>
        </ul>
    </li>
    <li>Defeat a Kraken</li>
    <li>Defeat a Megalodon </li>
    <li>Basic Voyages:
        <ul>
            <li>OOS:
                <ul>
                    <li>Ghost Fleet</li>
                    <li>Captains Skull Bounty</li>
                </ul>
            </li>
            <li>Gold Hoarder:
                <ul>
                    <li>X marks the spot/Riddle</li>
                    <li>Gold Vault</li>
                </ul>
            </li>
            <li>Merchant:
                <ul>
                    <li>Lost Shipment </li>
                    <li>Animal Delivery</li>
                    <li>Cargo Delivery</li>
                    <li>Commodity Trading</li>
                </ul>
            </li>
            <li>Athena:
                <ul>
                    <li>Athena Quest</li>
                    <li>Thieves Haven Run</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Light all 12 Beacons </li>
    <li>Legends of the Sea:
        <ul>
            <li>Legends of the Sea Journals/Easter Eggs
                <ul>
                <li>50 to find</li>
                </ul>
            </li>
            <li>Glitterbeard:
                <ul>
                    <li>Journals</li>
                    <li>Vault</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Sitting/Sleeping
        <ul>
            <li>13 different places</li>
        </ul>
    </li>
    <li>Form an Alliance with another Crew
        <ul>
        <li>Raise a alliance member</li>
        </ul>
    </li>
    <li>Keg a shark</li>
    <li>Cannon Rowboat a Kraken or Meg</li>
    <li>Cannon Rowboat another player&apos;s ship</li>
    <li>Fish</li>
    <li>Bury Treasure</li>
</ul>
      </main>

      {/* <footer>
      join us
      </footer> */}
    </div>
  )
}
