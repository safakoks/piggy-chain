
<template>

        <div class="input-group col-md-6">

            <label for="MoneyAmount">Add Money Amount</label>
            <input  class="form-control" v-model="moneyAmount" placeholder="Write amount" id="MoneyAmount">
            <button v-on:click="PiggyChain.addMoney(moneyAmount)" class="btn btn-primary">Add Money</button>

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
