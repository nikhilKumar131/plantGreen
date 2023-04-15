import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ScrollBar from '@/components/scrollBar'
import styles from '@/styles/History.module.css'
import { address, abi } from "@/contract/contract.js"


export default function Home() {

  console.log(address)
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.content}>
          <h1>
            You want to Plant trees but don't have time? Plant GREEN will save you
          </h1>
          <h2>Let People plant trees for you by just providing them equipments</h2>
          <br />
          <div style={{ display: "flex", justifyContent: 'center' }}>
            <img src='./image1.png' />
          </div>

          {/* <div className={styles.body}>
            <div style={{ display: "flex", flexDirection: "row", float: "center"}}>
              <img src='./mi.png' />
              <img style={{ marginLeft: "100px" }} src='./csk.png' />
            </div></div> */}

          <br />
          <div>
            <h2>What problem do we solve?</h2>
            <br/>
            <p>You might want to plant trees but don't have enough time.</p>
            <p>You might want to plant trees have time, but don't have resources.</p>
            <p>Here at Plant Green, we bridge this gap. People with resources can send ethers to smartContract for those who have time to plant sampling</p>
            <p>And if they plant the trees and provide proof only then they receieve the compensation.</p>
            <p>Works perfectly even in trustless environment</p>
            <br/>
            <br/>
          </div>
          <div>
            <h2>How it works?</h2>
            <br/>
            <p>You just have to add the number of plants you want to plant and pay fee to the contract.</p>
            <p>A student somewhere will accept the work, and will plant a tree</p>
            <p>He will provide pics, videos, etc to the smart contract of planting</p>
            <p>Some people with position of validators will check the proof and vote if it is authentic or not.</p>
            <p>If the proof is fake, You will get your money back from the contract.</p>
            <p>If the proof is valid, That person will receive the compensation</p>
            <p>Validators might receive a small fee for voting</p>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </div>
  )
}