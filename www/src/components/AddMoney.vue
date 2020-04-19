
<template>
    <div>
        <label for="MoneyAmount">Money Amount : </label>
        <input v-model="moneyAmount" placeholder="Write amount" id="MoneyAmount">
        <button v-on:click="addMoney(moneyAmount)" class="btn btn-primary">Add Money</button>
        <h3>Will added money : {{moneyAmount}}</h3>
    </div>
</template>

<script>
    import MainService  from "../services/MainService";

    export default  {
        name : 'AddMoney',
        data : function() {
            return {
                moneyAmount: undefined
            }
        },
        created() {
            MainService.PiggyChain.getUserData().then(returnedData =>{
                this.userData = returnedData;
            });
        },
        methods: {
            addMoney: async (moneyAmount) => {
                MainService.PiggyChain.addMoney(moneyAmount);
            }
        }
    }
</script>

<style scoped>

</style>
