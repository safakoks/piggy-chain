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
    <div class="row text-center">
        <md-card class="col-md-10">
            <md-card-header class="md-primary ">
                <div class="md-primary h4">Logs</div>
            </md-card-header>
            <md-card-content>
                <md-list>
                    <md-list-item class=" md-card mb-2 " v-for="log in moneyLogs"  :key="log.data">
                        <div class="md-card-header">
                            <md-icon class="md-size-2x md-primary" v-if="log.data.processType">add_circle</md-icon>
                            <md-icon class="md-size-2x md-accent" v-if="!log.data.processType">remove_circle</md-icon>
                        </div>
                        <div class="md-list-item-text col-md-2 text-center ">
                            <div class="border p-2 md-subheading font-weight-bold">{{ log.data.moneyAmount }}</div>

                        </div>
                        <div class="md-list-item-text">
                            <span>Block Number {{ log.blockNumber }} </span>
                            <span>{{ log.blockHash }}</span>
                        </div>

                        <md-list-item-button>
                            <a target="_blank0" :href="'https://ropsten.etherscan.io/tx/'+log.txHash"><md-button class="md-raised "><md-icon>crop_free</md-icon> EtherScan </md-button></a>
                        </md-list-item-button>
                    </md-list-item>
                </md-list>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
    export default {
        name: "MoneyLogs",
        data: ()=> {
            return {
                moneyLogs : undefined
            }
        },
        created() {
            this.PiggyChain.getMoneyLogs().then(result=>{
                this.moneyLogs = result;
            });
        }
    }
</script>

