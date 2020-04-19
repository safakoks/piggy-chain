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
    export default {
        name: "CurrentAccount",
        data: ()=>{
            return {
                account : undefined
            }
        },
        created() {
            window.PiggyChain.ethereumService.getCurrentAccount().then(returnedData =>{
                this.account = returnedData;
            });
        }
    }
</script>

<style scoped>

</style>
