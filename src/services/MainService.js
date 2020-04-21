/*
Copyright 2020 - Şafak Öksüzer, Berkay Korkmaz

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import PiggyChainService from "./PiggyChainService";
import EthereumService from "./EthereumService";
import web3 from './web3'
import Piggy from "../contracts/Piggy.json";

// Ropsten Contract : https://ropsten.etherscan.io/address/0x3d7b28f3360792dbe5ed21aa352ecec00b66483f
const contractAddress = '0x3D7b28F3360792DBe5Ed21aa352ECec00B66483F';

async function createPiggyChain() {
    let {Web3, error} = await web3();
    if(error){
        return {
            error
        };
    }
    let CreatedEthereumService = new EthereumService(Web3.eth);
    const contract = await new Web3.eth.Contract(Piggy.abi, contractAddress);
    let PiggyChain = new PiggyChainService(contract, CreatedEthereumService);
    return {
        PiggyChain
    };
}


export default {
    createPiggyChain
}
