
<template>
    <md-card>
        <md-card-header> Withdraw Money Amount </md-card-header>
        <md-card-content>
            <md-field>
            <md-input type="number"  v-model="moneyAmount" placeholder="Write amount" id="MoneyAmount"> </md-input>
            </md-field>
        </md-card-content>
        <md-card-actions>
            <md-button v-on:click="PiggyChain.withdrawMoney(moneyAmount)" class="md-accent">Withdraw</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
    export default  {
        name : 'WithdrawMoney',
        data : function() {
            return {
                moneyAmount: 0
            }
        }
    }
</script>

<style scoped>

</style>
