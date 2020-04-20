
<template>
    <div>
        <label for="MoneyAmount">Withdraw Money Amount</label>
        <input v-model="moneyAmount" placeholder="Write amount" id="MoneyAmount">
        <button v-on:click="PiggyChain.withdrawMoney(moneyAmount)" class="btn btn-danger">Withdraw Money</button>
    </div>
</template>

<script>
    export default  {
        name : 'WithdrawMoney',
        data : function() {
            return {
                moneyAmount: undefined
            }
        }
    }
</script>

<style scoped>

</style>
