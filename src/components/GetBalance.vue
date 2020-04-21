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
    <div>

        <md-card >
            <md-progress-bar v-if="!balance" md-mode="indeterminate"></md-progress-bar>
            <md-card-header v-if="balance" class="h3">
                Balance :                 {{ balance }}
            </md-card-header>
        </md-card>

    </div>

</template>

<script>
    export default {
        name: "GetBalance",
        data: ()=> {
            return {
                balance: undefined
            }
        },
        created() {
            this.PiggyChain.getBalance().then(result=>{
                this.balance = result;
            });
        }
    }
</script>

