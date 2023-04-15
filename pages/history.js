import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ScrollBar from '@/components/scrollBar'
import styles from '@/styles/History.module.css'


export default function Home() {
    return (
        <div className={styles.main}>
            <Navbar />
            
            <div className={styles.body}>
                {/* <img src='./banner.webp'/> */}
                <div className={styles.content}>
                    <h1>Validator Pannel</h1>
                    <p>Validator pannel is still under construction</p>
                    <p>All proofs are validated automically</p>
                </div>
            </div>
        </div>
    )
}