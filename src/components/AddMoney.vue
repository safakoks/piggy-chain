
<template>
        <md-card>
            <md-card-header> Add Money Amount </md-card-header>
            <md-card-content>
                <md-field>
                    <md-input  type="number" v-model="moneyAmount" placeholder="Write amount" id="MoneyAmount"> </md-input>
                </md-field>
            </md-card-content>
            <md-card-actions>
                <md-button v-on:click="PiggyChain.addMoney(moneyAmount)" class="md-primary">Add</md-button>
            </md-card-actions>
        </md-card>

</template>

<script>
    export default  {
        name : 'AddMoney',
        data : function() {
            return {
                moneyAmount: 0
            }
        }
    }
</script>


