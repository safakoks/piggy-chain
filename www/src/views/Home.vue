<template>
    <div>
        <h3>Home</h3>
        <CurrentAccount></CurrentAccount>
    </div>

</template>

<script>
    import CurrentAccount from "../components/CurrentAccount";


    export default {
        name: "home",
        components:{
            CurrentAccount
        }
    }
</script>

<style scoped>

</style>
