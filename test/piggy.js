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

const Piggy = artifacts.require("Piggy");



contract("Piggy", (accounts) =>{

    it("should set UserData", async ()=>{

        const instance = await Piggy.new();

        let newAccount1 = accounts[0];
        let newAccount2 = accounts[1];

        await instance.setUser({ name : "Ornek1" , age: 15 }, { from : newAccount1 });
        await instance.setUser({ name : "Ornek2" , age: 16 }, { from : newAccount2 });

        let returnedUserData1 = await instance.getUserData({ from : newAccount1 });
        let returnedUserData2 = await instance.getUserData({ from : newAccount2 });

        assert.equal("Ornek1", returnedUserData1.name,"name was not equal");
        assert.equal(15, returnedUserData1.age,"age was not equal");

        assert.equal("Ornek2", returnedUserData2.name,"name was not equal");
        assert.equal(16, returnedUserData2.age,"age was not equal");

    })

    it("should add Money", async ()=>{

        const instance = await Piggy.new();

        let user = accounts[0];

        await instance.addMoney(150, { from : user });

        let returnedBalance = await instance.getBalance({ from : user });

        assert.equal(150, returnedBalance,"balance was not equal");

    })

    it("should withdraw Money", async ()=>{

        const instance = await Piggy.new();

        let user = accounts[0];

        await instance.addMoney(150, { from : user });
        await instance.withdrawMoney(120, { from : user });

        let returnedBalance = await instance.getBalance({ from : user });

        assert.equal(30, returnedBalance,"balance was not equal");

    })


})