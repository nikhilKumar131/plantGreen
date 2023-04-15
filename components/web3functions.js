import { ethers } from "ethers";
import web3Modal from "web3modal";
import { useState, useRef, useEffect } from "react";



export const Metamask = async (signer = false) => {
    try {
        const web3ModalRef = useRef();
        web3ModalRef.current = new web3Modal({
            network: "goerli",
            providerOptions: {},
            disableInjectedProvider: false,
          });
        const provider = await web3ModalRef.current.connect()
        const web3provider = new ethers.providers.Web3Provider(provider)
        if (signer) {
            const sign = web3provider.getSigner();
            return sign;
        }
        return web3provider;
    } catch { err => { console.error(err) } }
}
