import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ScrollBar from '@/components/scrollBar'
import Player from '@/components/teamSelection/player'
import Table from '@/components/teamSelection/table'
import styles from '@/styles/TeamSelection.module.css'
import { createRef } from 'react'
import { abi, address } from '@/contract/contract'
import { ethers } from 'ethers'
import web3Modal from 'web3modal'
import { useState, useRef, useEffect } from "react";


export default function Home() {

  const child1 = createRef();
  const child2 = createRef();
  const child3 = createRef();
  const child4 = createRef();
  const child5 = createRef();
  const child6 = createRef();
  const child7 = createRef();
  const child8 = createRef();
  const child9 = createRef();
  const child10 = createRef();

  async function submit() {
    getId()
  }


  async function getId() {
    const team = [];
    const children = [child1, child2, child3, child4, child5, child6, child7, child8, child9, child10]

    children.map((key) => {
      const one = key.current.state.status;
      if (one == true) { team.push(key.current.state.id) }
    }
    )

    console.log(team);
    const limit = 1;
    if (team.length == limit) {
      console.log(`Team is full on ${limit}`)
      setSituation(`Uploading...`)
      await applyFor(team[0]);
      setSituation(`Request Uploaded`)


    }
    else if (team.length > limit) {
      console.log(`Extra players are selected (more then${limit})`)
      setSituation(`Extra players are selected (more then${limit})`)
    }
    else {
      console.log(`Less players are selected (less then${limit})`)
      setSituation(`Less players are selected (less then${limit})`)
    }
  }



  // web3 functions
    async function setLibraryContract() {
      const countContract = await
          tronWeb.contract().at('TVDp9g8AzDrVen1A66npTekCRihynNXbQo');
      return countContract;
  }

  async function applyFor(_id) {
      // init contract object
      const contract = await setLibraryContract();
      const application = await contract.applyFor(_id).send();
      console.log(application);
  }

  async function proof(_id) {
    // init contract object
    const contract = await setLibraryContract();
    const _proof = mainProof;
    const application = await contract.submitProof(_proof,_id).send();
    console.log(application);
}

async function setproof() {
  const team = [];
  const children = [child1, child2, child3, child4, child5, child6, child7, child8, child9, child10]

  children.map((key) => {
    const one = key.current.state.status;
    if (one == true) { team.push(key.current.state.id) }
  }
  )

  console.log(team);
  const limit = 1;
  if (team.length == limit) {
    console.log(`Team is full on ${limit}`)
    setSituation(`Uploading...`)
    await proof(team[0]);
    setSituation(`Request Uploaded`)


  }
  else if (team.length > limit) {
    console.log(`Extra players are selected (more then${limit})`)
    setSituation(`Extra players are selected (more then${limit})`)
  }
  else {
    console.log(`Less players are selected (less then${limit})`)
    setSituation(`Less players are selected (less then${limit})`)
  }
}



  const [situation, setSituation] = useState()
  const [mainProof, setProof] = useState()


  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.content}>
          <h1>Accpet Work</h1>
          <p>Choose work depending on the number of plants you can plant</p>
          <div className={styles.playerArray}>
            <a><Player id={1} ref={child1} /></a>
            <a><Player id={2} ref={child2} /></a>
            <a><Player id={3} ref={child3} /></a>
            <a><Player id={4} ref={child4} /></a>
            <a><Player id={5} ref={child5} /></a>
          </div>
          <div className={styles.playerArray}>

            <a><Player id={6} ref={child6} /></a>
            <a><Player id={7} ref={child7} /></a>
            <a><Player id={8} ref={child8} /></a>
            <a><Player id={9} ref={child9} /></a>
            <a><Player id={10} ref={child10} /></a>

          </div>
          <p>{ }</p>
          <div className={styles.playerCardButton}>
            <button className={styles.metaMask} onClick={submit}>submit</button>

          </div>
          <p>
            <a href='./claimReward' style={{ color: "blueviolet" }}><strong >Submit Proof</strong></a> after planting the trees
          </p>
          <input placeholder='enter proof link here' onChange={e => {setProof(e.target.value); console.log(mainProof)}}/>
          <button className={styles.claimRewardButtons} onClick={setproof}>Submit</button>

          <p>{situation}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}