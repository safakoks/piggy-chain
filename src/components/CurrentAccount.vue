<template>
   <span>{{account}}</span>
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
