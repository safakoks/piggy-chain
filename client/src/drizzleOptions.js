import Web3 from 'web3';
import Piggy from './contracts/Piggy.json';

const options = {
    web3: {
        customProvider: new Web3('ws://localhost:3548'),
        block: false
    },
    contracts: [
        Piggy
    ]
};

export default options;