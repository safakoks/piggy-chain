<template>
    <div>{{ balance }}</div>
</template>

<script>
    export default {
        name: "GetBalance",
        data: ()=> {
            return {
                balance: 0
            }
        },
        created() {
            this.PiggyChain.getBalance().then(result=>{
                this.balance = result;
            });
        }
    }
</script>

<style scoped>

</style>
