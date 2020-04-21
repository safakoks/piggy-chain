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
    <div class="row">
            <md-card>
                <md-card-header class="text-center">
                    <md-icon class="md-size-2x">assignment</md-icon>
                    Current Account
                </md-card-header>
                <md-card-content>
                    <md-card-area>
                        <current-account></current-account>
                    </md-card-area>
                </md-card-content>
            </md-card>


            <md-card>
                <md-card-header class="text-center">
                    <md-icon class="md-size-2x">description</md-icon>
                    Contract
                </md-card-header>
                <md-card-content>
                    <md-card-area>
                     <a target="_blank" href=" https://ropsten.etherscan.io/address/0x3d7b28f3360792dbe5ed21aa352ecec00b66483f">
                         <md-button class="md-button md-raised md-accent">EtherScan Contract</md-button>
                     </a>
                    </md-card-area>
                </md-card-content>
            </md-card>




    </div>

</template>

<script>
    import CurrentAccount from "../components/CurrentAccount";

    export default {
        name: "home",
        data: ()=>{
          return {
              title:'DENE'
          }
        },
        created() {
            this.menuTitle = 'Home';
        },
        components:{
            CurrentAccount
        }
    }
</script>


<style lang="scss" scoped>
    .md-icon{
        color: #22559C !important;
    }
    .md-card-header{
        font-size: 16px;
        font-weight: lighter;
    }
    .md-card {
        margin: 15px;
    }
</style>
