<!--
Copyright 2020 - Şafak Öksüzer, Berkay Korkmaz

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->

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
