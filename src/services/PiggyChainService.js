
class PiggyChainService {
    constructor(contract, ethereumService){
        this.contract = contract.methods;
        this.ethereumService = ethereumService;
    }

    withdrawMoney = async function(moneyAmount){
        let currentAccount = await this.ethereumService.getCurrentAccount();
        this.contract.withdrawMoney(moneyAmount).send({
            from : currentAccount
        })
    }

    addMoney = async function (moneyAmount){
        let currentAccount = await this.ethereumService.getCurrentAccount();
        this.contract.addMoney(moneyAmount).send({
            from : currentAccount
        });
    }

    setUser = async function ({name, age}){
        let currentAccount = await this.ethereumService.getCurrentAccount();
        this.contract.setUser(name, age).send({
            from : currentAccount
        });
    }

    getUserData = async function (){
        let currentAccount = await this.ethereumService.getCurrentAccount();
        let returnedData = await  this.contract.getUserData().call({
            from : currentAccount
        });
        return returnedData;
    }

    getBalance = async function() {
        let currentAccount = await this.ethereumService.getCurrentAccount();
        let returnedData = await  this.contract.getBalance().call({
            from : currentAccount
        });
        return returnedData;
    }


}

export default PiggyChainService

