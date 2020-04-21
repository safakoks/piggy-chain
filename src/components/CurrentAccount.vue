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
   <div class="text-center">
      <md-progress-spinner v-if="!account" md-mode="indeterminate"></md-progress-spinner>
      <span  v-if="account">{{account}}</span>
   </div>
</template>

<script>
    export default {
        name: "CurrentAccount",
        data: ()=>{
            return {
                account : undefined
            }
        },
        created() {
            this.PiggyChain.ethereumService.getCurrentAccount().then(returnedData =>{
                this.account = returnedData;
            });
        }
    }
</script>

<style scoped>

</style>
