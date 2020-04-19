import PiggyChainService from "./PiggyChainService";
import EthereumService from "./EthereumService";
import web3 from './web3'
import Piggy from "../contracts/Piggy.json";

// Ropsten Contract : https://ropsten.etherscan.io/address/0x3d7b28f3360792dbe5ed21aa352ecec00b66483f
const contractAddress = '0x3D7b28F3360792DBe5Ed21aa352ECec00B66483F';

async function createPiggyChain() {
    let Web3 = await web3();
    let CreatedEthereumService = new EthereumService(Web3.eth);
    const contract = await new Web3.eth.Contract(Piggy.abi, contractAddress);
    let PiggyChain = new PiggyChainService(contract, CreatedEthereumService);
    return PiggyChain;
}


export default {
    createPiggyChain
}
