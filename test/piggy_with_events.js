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

const Piggy = artifacts.require("PiggyWithEvents");

contract("Piggy", async (accounts) =>{
    let instance;

    // Users
    let user = accounts[0];
    let user2 = accounts[1];

    before( async () =>{
        instance = await Piggy.new();
    });

    describe("User", ()=>{
        it("should set UserData", async ()=>{

            await instance.setUser("Ornek1" , 15 , {
                from : user
            });
            await instance.setUser("Ornek2" , 16, {
                from : user2
            });

            let returnedUserData1 = await instance.getUserData({
                from : user
            });
            let returnedUserData2 = await instance.getUserData({
                from : user2
            });

            assert.equal("Ornek1", returnedUserData1[0],"name was not equal");
            assert.equal(15, returnedUserData1[1],"age was not equal");
            assert.equal("Ornek2", returnedUserData2[0],"name was not equal");
            assert.equal(16, returnedUserData2[1],"age was not equal");

        });
    });

    describe("Money", ()=>{

        describe("Adding", () => {
            it("should add Money", async ()=>{
                let user = accounts[0];

                let returnedData1 = await instance.addMoney(150, {
                    from : user
                });

                let eventName1 = returnedData1.logs[0].event;
                let eventData1 = returnedData1.logs[0].args;

                let returnedData2 = await instance.addMoney(200, {
                    from : user2
                });

                let eventName2 = returnedData2.logs[0].event;
                let eventData2 = returnedData2.logs[0].args;

                let returnedBalance = await instance.getBalance({
                    from : user
                });
                let returnedBalance2 = await instance.getBalance({
                    from : user2
                });

                assert.equal(eventName1, 'MoneyProcessEvent',"eventName1 was not MoneyProcessEvent");
                assert.equal(eventData1.userAddress, user,"Event1 User was not equal");
                assert.equal(eventData1.moneyAmount, 150,"Event1 moneyAmount was not equal");
                assert.equal(eventData1.processType, true,"Event1 processType was not equal");
                assert.equal(eventName2, 'MoneyProcessEvent',"eventName2 was not MoneyProcessEvent");
                assert.equal(eventData2.userAddress, user2,"Event2 User was not equal");
                assert.equal(eventData2.moneyAmount, 200,"Event2 moneyAmount was not equal");
                assert.equal(eventData2.processType, true,"Event2 processType was not equal");
                assert.equal(150, returnedBalance,"balance was not equal");
                assert.equal(200, returnedBalance2,"balance was not equal");

            });

            it("should not add negative Money", async ()=>{
                try{
                    let returnedData = await instance.addMoney(-50, {
                        from : user
                    });
                    assert.equal(undefined, returnedData, "Tx should be undefined");
                }catch (error) {
                    assert.equal(
                        true,
                        error.message.includes("Money amount must be greater than 0"),
                        "Money amount must be greater than 0"
                    );
                }
            });
        });

        describe("Withdrawing", () => {
            it("should withdraw Money", async ()=>{
                let returnedData = await instance.withdrawMoney(120, {
                    from : user
                });

                let eventName = returnedData.logs[0].event;
                let eventData = returnedData.logs[0].args;
                let returnedBalance = await instance.getBalance({
                    from : user
                });
                await instance.withdrawMoney(40, {
                    from : user2
                });
                let returnedBalance2 = await instance.getBalance({
                    from : user2
                });

                assert.equal(eventName, 'MoneyProcessEvent',"eventName was not MoneyProcessEvent");
                assert.equal(eventData.userAddress, user,"Event User was not equal");
                // assert.equal(eventData.moneyAmount, 40,"Event moneyAmount was not equal");
                assert.equal(eventData.processType, false,"Event processType was not equal");
                assert.equal(returnedBalance, 30,"balance was not equal");
                assert.equal(returnedBalance2, 160,"balance was not equal");
            });

            it("should not withdraw more Money than balance", async ()=>{
                try{
                    let returnedData = await instance.withdrawMoney(40, {
                        from : user
                    });
                    assert.equal(undefined, returnedData, "Tx should be undefined");
                }catch (error) {
                    assert.equal(
                        true,
                        error.message.includes("Money amount must be less or equal than balance"),
                        "Money amount must be less or equal than balance"
                    );
                }
            })

            it("should not withdraw negative Money", async ()=>{
                try{
                    let returnedData = await instance.withdrawMoney(-50, {
                        from : user
                    });
                    assert.equal(undefined, returnedData, "Tx should be undefined");
                }catch (error) {
                    assert.equal(
                        true,
                        error.message.includes("Money amount must be greater than 0"),
                        "Money amount must be greater than 0"
                    );
                }
            });
        });

    });


});
