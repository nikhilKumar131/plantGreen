import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ScrollBar from '@/components/scrollBar'
import styles from '@/styles/History.module.css'
import { ethers } from 'ethers'
import web3Modal from 'web3modal'
import { useRef, useEffect, useState } from 'react'
import { address, abi } from '@/contract/contract'


export default function Home() {

    function claim() {
        console.log("claim")
        claimReward()

    }

    // web3 functions
    async function setLibraryContract() {
        const countContract = await
            tronWeb.contract().at('TVDp9g8AzDrVen1A66npTekCRihynNXbQo');
        return countContract;
    }

    async function pitch() {
        // init contract object
        const contract = await setLibraryContract();
        const count = await contract.pitch().send({ callvalue:100000});
        console.log(count)
    }
    

    const [score, setScore] = useState()


    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.body}>

                <div className={styles.content}>
                    <ul>
                        <h1>Just add the number of plant you want to plant</h1>
                        <h2>and Pay fee of 0.1 for each plant</h2>
                    </ul>
                    <br />
                    <button className={styles.claimRewardButtons} onClick={pitch}>Submit Request</button>
                    <br />
                </div>
            </div>
            <Footer />
        </div>
    )
}