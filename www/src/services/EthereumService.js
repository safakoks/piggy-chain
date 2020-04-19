
class EthereumService {
    constructor(web3Eth) {
        this.web3Eth = web3Eth
    }

    getCurrentAccount = async function() {
        const accounts = await this.web3Eth.getAccounts()
        return (accounts && accounts.length>0)?accounts[0]: undefined
    }
}

export default EthereumService;
