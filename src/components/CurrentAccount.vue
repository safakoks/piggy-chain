<template>
    <md-card>
        <md-card-content>
            <md-card-header class="h3">
                Current Amount
            </md-card-header>
            <md-highlight-text>
                {{account}}
            </md-highlight-text>
        </md-card-content>

    </md-card>
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
