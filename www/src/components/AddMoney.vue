
<template>
    <div>
        <label for="MoneyAmount">Money Amount : </label>
        <input v-model="moneyAmount" placeholder="Write amount" id="MoneyAmount">
        <button v-on:click="addMoney" class="btn btn-primary">Add Money</button>
    </div>
</template>

<script>
    import  PiggyChainService from '../services/PiggyChainService'
    // const PiggyChain = new PiggyChainService();
    module.exports =  {
        name : 'AddMoney',
        data : function() {
            return {
                moneyAmount: 0,
            }
        },
        methods: {
            addMoney: ()=>{
                alert(PiggyChainService)
            }
        }
    }
</script>

<style scoped>

</style>
