<template>
    <md-card>
        <md-card-header class="h3">
            Balance :                 {{ balance }}

        </md-card-header>
    </md-card>
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

