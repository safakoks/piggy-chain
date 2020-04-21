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
    <get-balance></get-balance>
<div class="row">
    <div class="col-md-6">
        <AddMoney></AddMoney>
    </div>
    <div class="col-md-6">
        <WithdrawMoney></WithdrawMoney>
    </div>
</div>

</div>
</template>

<script>

    import AddMoney from "../components/AddMoney";
    import WithdrawMoney from "../components/WithdrawMoney";
    import GetBalance from "../components/GetBalance";
    export default {
        name: "Money",
        created() {
            this.menuTitle = 'Money';
        },
        components : {
            GetBalance,
            AddMoney,
            WithdrawMoney
        }
    }
</script>

<style lang="scss" scoped>
    .md-card {
        margin: 15px;
    }
</style>
