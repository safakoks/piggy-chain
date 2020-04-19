
<template>
    <div>
        <label for="MoneyAmount">Money Amount : </label>
        <input v-model="moneyAmount" placeholder="Write amount" id="MoneyAmount">
        <button v-on:click="addMoney(moneyAmount)" class="btn btn-primary">Add Money</button>
        <h3>Will added money : {{moneyAmount}}</h3>
    </div>
</template>

<script>
    import PiggyChainService from './../services/PiggyChainService'

    export default  {
        name : 'AddMoney',
        data : function() {
            return {
                moneyAmount: undefined
            }
        },
        created() {
            let currentPiggyChain = new PiggyChainService();
            currentPiggyChain.getUserData().then(returnedData =>{
                this.userData = returnedData;
            });
        },
        methods: {
            addMoney: async (moneyAmount) => {
                let currentPiggyChain =  new PiggyChainService();
                await currentPiggyChain.addMoney(moneyAmount);
            }
        }
    }
</script>

<style scoped>

</style>
