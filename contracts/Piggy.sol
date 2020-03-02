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

contract Piggy{

    mapping(address => UserData) UserDataMap;
    mapping(address => uint) UserMoneyMap;

    struct UserData{
        string name;
        uint8 age;
    }

    function setUser( string memory _name, uint8 _age) public {
        UserDataMap[msg.sender] = UserData({
            name: _name,
            age: _age
        });
    }


    function addMoney(uint _moneyAmount) public {
        
        require(_moneyAmount > 0, "Money amount must be greater than 0.");
        UserMoneyMap[msg.sender] += _moneyAmount;

    }

    function withdrawMoney(uint _moneyAmount) public {

        require(_moneyAmount > 0, "Money amount must be greater than 0.");
        UserMoneyMap[msg.sender] -= _moneyAmount;

    }

    function getBalance() public view returns(uint) {

        return UserMoneyMap[msg.sender];

    }

    function getUserData() public view returns(string memory, uint8) {

        return (UserDataMap[msg.sender].name, UserDataMap[msg.sender].age);

    }

}
