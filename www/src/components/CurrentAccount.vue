<template>
    <div>
        <div v-if="account">
            {{account}}
        </div>

        <div>
        </div>
    </div>

</template>

<script>
    import MainService  from "../services/MainService";

    export default {
        name: "CurrentAccount",
        data: ()=>{
            return {
                account : undefined
            }
        },
        created() {
            MainService.PiggyChain.getCurrentAccount().then(returnedData =>{
                this.account = returnedData;
            });
        }
    }
</script>

<style scoped>

</style>
