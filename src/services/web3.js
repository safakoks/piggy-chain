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
