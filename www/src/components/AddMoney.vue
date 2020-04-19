
<template>
    <div>
        <label for="MoneyAmount">Money Amount : </label>
        <input v-model="moneyAmount" placeholder="Write amount" id="MoneyAmount">
        <button v-on:click="PiggyChain.addMoney(moneyAmount)" class="btn btn-primary">Add Money</button>
        <h3>Will added money : {{moneyAmount}}</h3>
    </div>
</template>

<script>
    export default  {
        name : 'AddMoney',
        data : function() {
            return {
                moneyAmount: undefined
            }
        }
    }
</script>

<style scoped>

</style>
