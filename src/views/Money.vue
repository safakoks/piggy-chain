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
