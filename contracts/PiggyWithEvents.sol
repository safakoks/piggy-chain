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

pragma solidity >=0.4.21 <0.7.0;

contract PiggyWithEvents{
    // Struct Define
    struct UserData{
        string name;
        uint8 age;
    }

    // Events
    event MoneyProcessEvent(address indexed userAddress, uint moneyAmount, bool processType);

    // Mapping Data
    mapping(address => UserData) UserDataMap;
    mapping(address => uint) UserMoneyMap;
    mapping(address => uint) UserFirstChange;
    mapping(address => uint) UserLastChange;

    function setUser(string memory _name, uint8 _age) public {
        UserDataMap[msg.sender] = UserData({
            name: _name,
            age: _age
            });
    }

    function addMoney(uint _moneyAmount) public{
        require (_moneyAmount < 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF,
            "Money amount must be greater than 0");
        if(UserFirstChange[msg.sender]==0){
            UserFirstChange[msg.sender] = block.number;
        }
        UserLastChange[msg.sender]==block.number;
        UserMoneyMap[msg.sender] += _moneyAmount;
        emit MoneyProcessEvent(msg.sender, _moneyAmount, true);

    }

    function withdrawMoney(uint _moneyAmount) public {
        require (_moneyAmount < 0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF,
            "Money amount must be greater than 0");
        require(UserMoneyMap[msg.sender] >= _moneyAmount,
            "Money amount must be less or equal than balance");

        UserMoneyMap[msg.sender] -= _moneyAmount;
        if(UserFirstChange[msg.sender]==0){
            UserFirstChange[msg.sender] = block.number;
        }
        UserLastChange[msg.sender]==block.number;
        emit MoneyProcessEvent(msg.sender, _moneyAmount, false);
    }

    function getChanges() public view returns(uint, uint){
        return (UserFirstChange[msg.sender], UserLastChange[msg.sender]);
    }

    function getBalance() public view returns(uint) {

        return UserMoneyMap[msg.sender];

    }

    function getUserData() public view returns(string memory, uint8) {

        return (UserDataMap[msg.sender].name, UserDataMap[msg.sender].age);

    }

}
