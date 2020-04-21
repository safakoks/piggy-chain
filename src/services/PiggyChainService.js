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

class PiggyChainService {
    constructor(contract, ethereumService){
        this.contractIns = contract;
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
        }).then(console.log).catch(console.log);
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

    getEventLogs = async function(eventName, filter){
        let eventLogs = await  this.contractIns.getPastEvents(eventName, filter);
        let mappedLogs = await eventLogs.map(value => {
            return {
                data : value.returnValues,
                txHash : value.transactionHash,
                blockNumber : value.blockNumber,
                blockHash : value.blockHash
            };
        })
        return  mappedLogs;
    }

    getMoneyLogs = async function() {
        let currentAccount = await this.ethereumService.getCurrentAccount();

        let changes = await this.contract.getChanges().call({
            from : currentAccount
        });
        console.log(changes);
        let returnedData = await  this.getEventLogs("MoneyProcessEvent", {
            filter : {
                address : currentAccount
            },
            fromBlock : changes[0],
        });


        return  returnedData;
    }

}

export default PiggyChainService

