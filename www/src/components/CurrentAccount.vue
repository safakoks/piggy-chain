<template>
    <div v-if="account">
        {{account}}
    </div>
</template>

<script>
    import PiggyChainService from "../services/PiggyChainService";

    export default {
        name: "CurrentAccount",
        data: ()=>{
            return {
                account : undefined
            }
        },
        created() {
            let currentPiggyChain = new PiggyChainService();
            currentPiggyChain.getCurrentAccount().then(returnedData =>{
                this.account = returnedData;
            });
        }
    }
</script>

<style scoped>

</style>
