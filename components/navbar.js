import styles from '@/styles/History.module.css';
import { useState, useRef, useEffect } from "react";

function Navbar() {

    const web3ModalRef = useRef();
    const [walletStatus, setWalletStatus] = useState(false)

    async function getTronWeb() {
        try {
          let tronWeb;
          if (window.tronLink.ready) {
            tronWeb = tronLink.tronWeb;
          } else {
            const res = await tronLink.request({ method: 'tron_requestAccounts' });
            if (res.code === 200) {
              tronWeb = tronLink.tronWeb;
            }
          }
          return tronWeb;
          console.log(tronWeb);
        } catch { err => { console.error(err) } }
      }




    return (
        <div >

            <div className={styles.navbar}>
                <img className={styles.fimage} src='./pngegg.png' />
                <div >
                    <div className={styles.navBarButtons}>
                        <a href="/">Home</a>
                        <a href="/teamSelection">PlantTrees</a>
                        <a href="/claimReward">ProvideToPlanters</a>
                        <a href="/history">Validators</a>
                        <a href="about">About</a>
                    </div>

                </div>
                <div className={styles.metaMaskButton}>
                    <button className={styles.metaMask} onClick={getTronWeb}>
                        <a>Wallet</a>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar;