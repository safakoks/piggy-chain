<template>
<div>
    <h3>Money</h3>
    <h4>Current Balance  <GetBalance></GetBalance> </h4>
    <AddMoney></AddMoney>
</div>
</template>

<script>

    import AddMoney from "../components/AddMoney";
    import GetBalance from "../components/GetBalance";

    export default {
        name: "Money",
        components : {
            AddMoney,
            GetBalance
        }
    }
</script>

<style scoped>

</style>
