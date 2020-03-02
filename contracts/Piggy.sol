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



pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;


contract Piggy{

    mapping(address => UserData) UserDataMap;
    mapping(address => uint) UserMoneyMap;

    struct UserData{
        string name;
        uint8 age;
    }

    function setUser(UserData memory _userData) public {

        UserDataMap[msg.sender] = _userData;
    }


    function addMoney(uint _moneyAmount) public {

        UserMoneyMap[msg.sender] += _moneyAmount;

    }

    function withdrawMoney(uint _moneyAmount) public {

        UserMoneyMap[msg.sender] -= _moneyAmount;

    }

    function getBalance() public view returns(uint) {

        return UserMoneyMap[msg.sender];

    }

    function getUserData() public view returns(UserData memory) {

        return UserDataMap[msg.sender];

    }

}
