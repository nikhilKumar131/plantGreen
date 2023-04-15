import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ScrollBar from '@/components/scrollBar'
import styles from '@/styles/History.module.css'


export default function Home() {
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.body}>
                <div className={styles.content}>
                    <h1>Plant Green</h1>
                    <br/>
                    <p>You can find someone to plant trees for you, just pay some tokens</p>
                    <p>This is a decentralized build on tron testnetwork (Neil). </p>
                    <p>This is the github <a style={{color: "blue"}} href='https://github.com/nikhilKumar131/Dream11Dapp/blob/main/contract/dream11b.sol'>link</a> of the SMART CONTRACT that has been deployed on test net.</p>
                    <p>Some part of contract is still under construction.</p>
                    <p>This is the github <a style={{color: "blue"}} href='https://github.com/nikhilKumar131/Dream11Dapp'>link</a> of the Project.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}