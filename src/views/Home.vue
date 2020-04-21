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
                <md-card-header class="text-center font-weight-bold h4">
                    <md-icon class="md-size-2x">person</md-icon>
                    <p class="mt-3">Current Account</p>
                </md-card-header>
                <md-card-content>
                    <md-card-area class="h5 border p-2">
                        <current-account></current-account>
                    </md-card-area>
                </md-card-content>
            </md-card>
            <md-card>
                <md-card-header class="text-center font-weight-bold h4">
                    <md-icon class="md-size-2x">description</md-icon>
                    <p class="mt-3">Contract</p>
                </md-card-header>
                <md-card-content>
                            0x34e064c64d5867c200b5c1e1587939377e295ab4
                </md-card-content>

                <a target="_blank" href="https://ropsten.etherscan.io/address/0x3d7b28f3360792dbe5ed21aa352ecec00b66483f">
                    <md-button class="md-raised md-accent">Get Contract</md-button>
                </a>


            </md-card>




    </div>

</template>

<script>
    import CurrentAccount from "../components/CurrentAccount";

    export default {
        name: "home",
        data: ()=>{
          return {
          }
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
