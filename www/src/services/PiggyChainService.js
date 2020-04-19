import Piggy  from './../contracts/Piggy.json'
import Web3 from './web3'
// import moment from 'moment'

// Ropsten Contract : https://ropsten.etherscan.io/address/0x3d7b28f3360792dbe5ed21aa352ecec00b66483f
const contractAddress = '0x3D7b28F3360792DBe5Ed21aa352ECec00B66483F';

module.exports = class PiggyChainService {
    getContract = async function() {
        const web3 = await Web3()
        if (!web3) {
            return undefined
        }

        const contract = await new web3.eth.Contract(Piggy.abi, contractAddress);
        return contract.methods;
    }

    addMoney = async function (moneyAmount){
        await this.getContract().addMoney(moneyAmount).send({
            from : this.getCurrentAccount
        });
    }

    getCurrentAccount = async function() {
        const web3 = await Web3()
        if (!web3) {
            return undefined
        }
        const accounts = await web3.eth.getAccounts()

        return (accounts && accounts.length>0)?accounts[0]: undefined
    }
}
