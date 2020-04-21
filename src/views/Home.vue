<template>
    <div class="row">
            <md-card>
                <md-card-header class="text-center">
                    <md-icon class="md-size-2x">assignment</md-icon>
                    Current Account
                </md-card-header>
                <md-card-content>
                    <md-card-area>
                        <current-account></current-account>
                    </md-card-area>
                </md-card-content>
            </md-card>


            <md-card>
                <md-card-header class="text-center">
                    <md-icon class="md-size-2x">description</md-icon>
                    Contract
                </md-card-header>
                <md-card-content>
                    <md-card-area>
                     <a target="_blank" href=" https://ropsten.etherscan.io/address/0x3d7b28f3360792dbe5ed21aa352ecec00b66483f">
                         <md-button class="md-button md-raised md-accent">EtherScan Contract</md-button>
                     </a>
                    </md-card-area>
                </md-card-content>
            </md-card>




    </div>

</template>

<script>
    import CurrentAccount from "../components/CurrentAccount";

    export default {
        name: "home",
        data: ()=>{
          return {
              title:'DENE'
          }
        },
        created() {
            this.menuTitle = 'Home';
        },
        components:{
            CurrentAccount
        }
    }
</script>


<style lang="scss" scoped>
    .md-icon{
        color: #22559C !important;
    }
    .md-card-header{
        font-size: 16px;
        font-weight: lighter;
    }
    .md-card {
        margin: 15px;
    }
</style>
