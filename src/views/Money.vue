<template>
<div>
    <h3>Money</h3>
    <h4>Current Balance  <GetBalance></GetBalance> </h4>
    <AddMoney></AddMoney>
    <WithdrawMoney></WithdrawMoney>
</div>
</template>

<script>

    import AddMoney from "../components/AddMoney";
    import GetBalance from "../components/GetBalance";
    import WithdrawMoney from "../components/WithdrawMoney";
    export default {
        name: "Money",
        components : {
            AddMoney,
            GetBalance,
            WithdrawMoney
        }
    }
</script>

<style scoped>

</style>
