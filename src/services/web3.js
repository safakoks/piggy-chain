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

import Web3 from 'web3'

export default async () => {
    let web3
    if (typeof window !== 'undefined' && typeof window.ethereum != 'undefined') {

        try {
            await window.ethereum.enable()
            web3 = await new Web3(window.ethereum, null, {transactionConfirmationBlocks: 1})
        } catch (error) {
            return {
                error : 'Please, allow MetaMask access to your account'
            }
        }
    } else if (typeof window !== 'undefined' && typeof window.web3 != 'undefined') {
        // Legacy purpose. Web3.provider is injected in window.ethereum
        web3 = await new Web3(window.web3.currentProvider);
    } else {
        return {
            error : 'Please, install MetaMask'
        }
    }
    return {
        Web3 : web3
    }
}
