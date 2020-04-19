
<template>
    <div>
        <h2>{{currentAccount}}</h2>
        <label for="MoneyAmount">Money Amount : </label>
        <input v-model="moneyAmount" placeholder="Write amount" id="MoneyAmount">
        <button v-on:click="addMoney(moneyAmount)" class="btn btn-primary">Add Money</button>
        <h3>Will added money : {{moneyAmount}}</h3>
    </div>
</template>

<script>
    import PiggyChainService from './../services/PiggyChainService'
    // import  TestService from '../services/TestService'


    export default  {
        name : 'AddMoney',
        data : function() {
            return {
                moneyAmount: undefined,
                currentAccount : 'SAMPLE'
            }
        },
        created() {
            let currentPiggyChain = new PiggyChainService();
            currentPiggyChain.getCurrentAccount().then((value) =>{
                this.currentAccount = value;
            }
        );
        },
        methods: {
            addMoney: async (moneyAmount) => {
                let currentPiggyChain = new PiggyChainService();
                await currentPiggyChain.addMoney(moneyAmount);
            }
        }
    }
</script>

<style scoped>

</style>
